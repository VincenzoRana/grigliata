const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');
const webpush = require('web-push');

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
const VAPID_PATH = path.join(DATA_DIR, 'vapid.json');
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

  CREATE TABLE IF NOT EXISTS push_subscriptions (
    endpoint TEXT PRIMARY KEY,
    keys TEXT NOT NULL,
    sender_id TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// ── VAPID keys (generated once, persisted to disk) ──
function loadOrCreateVapidKeys() {
  if (fs.existsSync(VAPID_PATH)) {
    try { return JSON.parse(fs.readFileSync(VAPID_PATH, 'utf8')); } catch {}
  }
  const keys = webpush.generateVAPIDKeys();
  fs.writeFileSync(VAPID_PATH, JSON.stringify(keys, null, 2), { mode: 0o600 });
  return keys;
}
const vapid = loadOrCreateVapidKeys();
webpush.setVapidDetails('mailto:admin@grigliata.vincenzo-rana.it', vapid.publicKey, vapid.privateKey);

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

// ── Push notifications API ──

app.get('/api/push/public-key', (_req, res) => {
  res.json({ publicKey: vapid.publicKey });
});

app.post('/api/push/subscribe', (req, res) => {
  const { subscription, label, participantId } = req.body || {};
  if (!subscription || !subscription.endpoint || !subscription.keys) {
    return res.status(400).json({ error: 'Invalid subscription' });
  }
  const isNew = !db.prepare('SELECT 1 FROM push_subscriptions WHERE endpoint = ?').get(subscription.endpoint);
  const senderTag = participantId ? `pid:${participantId}` : (label || null);
  db.prepare(`
    INSERT INTO push_subscriptions (endpoint, keys, sender_id)
    VALUES (?, ?, ?)
    ON CONFLICT(endpoint) DO UPDATE SET keys = excluded.keys, sender_id = excluded.sender_id
  `).run(subscription.endpoint, JSON.stringify(subscription.keys), senderTag);

  // Scherzo dedicato a Pillo: welcome push quando attiva le notifiche
  if (isNew && label && /pillo/i.test(label)) {
    const payload = JSON.stringify({
      title: 'Le notifiche esistono, Pillo 🐧',
      body: '«No, non ci sono le notifiche su quell\'app, dovresti inserirle ma chissà quanto tempo ci vuole…» — tu, qualche giorno fa. Eccole. Non hai più scuse per non leggere la chat.',
      tag: 'pillo-welcome',
      url: '/',
    });
    webpush.sendNotification(
      { endpoint: subscription.endpoint, keys: subscription.keys },
      payload
    ).catch(err => console.warn('Pillo welcome push failed:', err.message));
  }

  res.json({ ok: true });
});

app.post('/api/push/unsubscribe', (req, res) => {
  const { endpoint } = req.body || {};
  if (!endpoint) return res.status(400).json({ error: 'Missing endpoint' });
  db.prepare('DELETE FROM push_subscriptions WHERE endpoint = ?').run(endpoint);
  res.json({ ok: true });
});

app.post('/api/push/update-participant', (req, res) => {
  const { endpoint, participantId } = req.body || {};
  if (!endpoint) return res.status(400).json({ error: 'Missing endpoint' });
  const senderTag = participantId ? `pid:${participantId}` : null;
  const result = db.prepare('UPDATE push_subscriptions SET sender_id = ? WHERE endpoint = ?')
    .run(senderTag, endpoint);
  res.json({ ok: true, updated: result.changes });
});

app.get('/api/push/active-participants', (_req, res) => {
  const rows = db.prepare(`
    SELECT DISTINCT sender_id FROM push_subscriptions
    WHERE sender_id LIKE 'pid:%'
  `).all();
  const participantIds = rows.map(r => r.sender_id.slice(4));
  res.json({ participantIds });
});

app.post('/api/push/notify', async (req, res) => {
  const { title, body, tag, excludeEndpoint, url } = req.body || {};
  if (!title || !body) return res.status(400).json({ error: 'Missing title or body' });

  const rows = excludeEndpoint
    ? db.prepare('SELECT endpoint, keys FROM push_subscriptions WHERE endpoint != ?').all(excludeEndpoint)
    : db.prepare('SELECT endpoint, keys FROM push_subscriptions').all();

  const payload = JSON.stringify({
    title: String(title).slice(0, 120),
    body: String(body).slice(0, 240),
    tag: tag || 'grigliata',
    url: url || '/',
  });

  const results = await Promise.allSettled(rows.map(row => {
    const sub = { endpoint: row.endpoint, keys: JSON.parse(row.keys) };
    return webpush.sendNotification(sub, payload);
  }));

  // Clean up expired subscriptions (410 Gone / 404 Not Found)
  const stale = [];
  results.forEach((r, i) => {
    if (r.status === 'rejected' && r.reason && (r.reason.statusCode === 410 || r.reason.statusCode === 404)) {
      stale.push(rows[i].endpoint);
    }
  });
  if (stale.length) {
    const placeholders = stale.map(() => '?').join(',');
    db.prepare(`DELETE FROM push_subscriptions WHERE endpoint IN (${placeholders})`).run(...stale);
  }

  res.json({ sent: results.filter(r => r.status === 'fulfilled').length, total: rows.length, stale: stale.length });
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
