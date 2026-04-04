const express = require('express');
const http = require('http');
const path = require('path');
const PORT = Number(process.env.PORT || 3000);
const SERVERS_TOOL_PORT = 3004;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_req, res) => res.json({ ok: true }));

// Proxy builder API requests to servers-tool (avoids CORS issues)
app.all('/api/builder/*', (req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: SERVERS_TOOL_PORT,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, host: 'servers.vincenzo-rana.it' },
  };
  const proxy = http.request(options, (upstream) => {
    res.writeHead(upstream.statusCode, upstream.headers);
    upstream.pipe(res);
  });
  proxy.on('error', () => res.status(502).json({ error: 'proxy error' }));
  req.pipe(proxy);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[${path.basename(__dirname)}] listening on port ${PORT}`);
});
