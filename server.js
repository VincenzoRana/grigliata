const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const PORT = Number(process.env.PORT || 3000);
const SERVERS_TOOL_PORT = 3004;
const APP_NAME = 'grigliata';
const HOME_DIR = process.env.HOME || __dirname;
const XDG_DATA_HOME = process.env.XDG_DATA_HOME || path.join(HOME_DIR, '.local', 'share');
const LEGACY_DATA_DIR = path.join(__dirname, 'data');
const DATA_DIR = process.env.GRIGLIATA_DATA_DIR
  ? path.resolve(process.env.GRIGLIATA_DATA_DIR)
  : path.join(XDG_DATA_HOME, APP_NAME);
const DB_PATH = path.join(DATA_DIR, 'grigliata.db');
const RECOVERY_DIR = path.join(DATA_DIR, 'recovery');
const MAX_BACKUPS = 250;

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function migrateLegacyDatabase() {
  ensureDir(DATA_DIR);
  ensureDir(RECOVERY_DIR);
  if (fs.existsSync(DB_PATH)) return;
  const legacyDbPath = path.join(LEGACY_DATA_DIR, 'grigliata.db');
  if (!fs.existsSync(legacyDbPath)) return;
  for (const suffix of ['', '-wal', '-shm']) {
    const source = `${legacyDbPath}${suffix}`;
    const target = `${DB_PATH}${suffix}`;
    if (fs.existsSync(source) && !fs.existsSync(target)) {
      fs.copyFileSync(source, target);
    }
  }
}

function pruneBackups(limit = MAX_BACKUPS) {
  db.prepare(`
    DELETE FROM backups
    WHERE id NOT IN (SELECT id FROM backups ORDER BY created_at DESC, id DESC LIMIT ?)
  `).run(limit);
}

function createBackupEntry(data, description) {
  if (data == null || data === 'null') return null;
  const result = db.prepare('INSERT INTO backups (data, description) VALUES (?, ?)').run(data, description);
  pruneBackups();
  return result.lastInsertRowid;
}

migrateLegacyDatabase();

// ── Database setup ──
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS app_state (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    data TEXT NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS backups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// Insert default row if empty
const row = db.prepare('SELECT id FROM app_state WHERE id = 1').get();
if (!row) {
  db.prepare('INSERT INTO app_state (id, data, version) VALUES (1, ?, 1)').run('null');
}

// ── Express app ──
const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Health ──
app.get('/health', (_req, res) => res.json({ ok: true }));

// ── State API ──

// Get current state
app.get('/api/state', (_req, res) => {
  const row = db.prepare('SELECT data, version FROM app_state WHERE id = 1').get();
  const data = row.data === 'null' ? null : JSON.parse(row.data);
  res.json({ state: data, version: row.version });
});

// Get version only (for polling)
app.get('/api/state/version', (_req, res) => {
  const row = db.prepare('SELECT version FROM app_state WHERE id = 1').get();
  res.json({ version: row.version });
});

// Save state
app.put('/api/state', (req, res) => {
  const { state } = req.body;
  if (!state) return res.status(400).json({ error: 'Missing state' });
  const data = JSON.stringify(state);
  const current = db.prepare('SELECT data FROM app_state WHERE id = 1').get();
  if (current?.data && current.data !== data && current.data !== 'null') {
    createBackupEntry(current.data, `Auto-backup before state update (${new Date().toLocaleString('it-IT')})`);
  }
  db.prepare(`
    UPDATE app_state SET data = ?, version = version + 1, updated_at = datetime('now') WHERE id = 1
  `).run(data);
  const row = db.prepare('SELECT version FROM app_state WHERE id = 1').get();
  res.json({ version: row.version });
});

// ── Backup API ──

// Create backup
app.post('/api/backups', (req, res) => {
  const { description } = req.body || {};
  const row = db.prepare('SELECT data FROM app_state WHERE id = 1').get();
  const desc = description || `Backup ${new Date().toLocaleString('it-IT')}`;
  const backupId = createBackupEntry(row?.data, desc);
  if (!backupId) return res.status(400).json({ error: 'Nothing to back up yet' });
  res.json({ id: backupId, description: desc });
});

// List backups
app.get('/api/backups', (_req, res) => {
  const rows = db.prepare('SELECT id, description, created_at FROM backups ORDER BY created_at DESC').all();
  res.json({ backups: rows });
});

// Restore from backup
app.post('/api/backups/:id/restore', (req, res) => {
  const backup = db.prepare('SELECT data FROM backups WHERE id = ?').get(req.params.id);
  if (!backup) return res.status(404).json({ error: 'Backup not found' });

  // Auto-backup current state before restoring
  const current = db.prepare('SELECT data FROM app_state WHERE id = 1').get();
  createBackupEntry(
    current.data,
    `Auto-backup prima del ripristino (${new Date().toLocaleString('it-IT')})`
  );

  db.prepare(`
    UPDATE app_state SET data = ?, version = version + 1, updated_at = datetime('now') WHERE id = 1
  `).run(backup.data);
  const row = db.prepare('SELECT version FROM app_state WHERE id = 1').get();
  res.json({ version: row.version });
});

// Delete backup
app.delete('/api/backups/:id', (req, res) => {
  db.prepare('DELETE FROM backups WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── Proxy builder API requests to servers-tool ──
function proxyBuilderRequest(req, res) {
  const headers = { ...req.headers, host: 'servers.vincenzo-rana.it' };
  const hasParsedBody = !['GET', 'HEAD'].includes(req.method) && req.body !== undefined;
  let payload = null;

  if (hasParsedBody) {
    if (Buffer.isBuffer(req.body)) payload = req.body;
    else if (typeof req.body === 'string') payload = Buffer.from(req.body);
    else payload = Buffer.from(JSON.stringify(req.body));
    headers['content-type'] = headers['content-type'] || 'application/json';
    headers['content-length'] = String(payload.length);
    delete headers['transfer-encoding'];
  }

  const options = {
    hostname: '127.0.0.1',
    port: SERVERS_TOOL_PORT,
    path: req.url,
    method: req.method,
    headers,
  };
  const proxy = http.request(options, (upstream) => {
    res.writeHead(upstream.statusCode, upstream.headers);
    upstream.pipe(res);
  });
  proxy.on('error', (err) => res.status(502).json({ error: `proxy error: ${err.message}` }));
  if (payload) proxy.end(payload);
  else req.pipe(proxy);
}

app.all('/api/builder/*', (req, res) => {
  proxyBuilderRequest(req, res);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[${path.basename(__dirname)}] listening on port ${PORT}`);
});
