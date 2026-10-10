const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3030;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];

  // Helpful aliases
  if (reqPath === '/dayrest' || reqPath === '/harare') {
    res.writeHead(302, { 'Location': '/dayrest-harare/' });
    res.end();
    return;
  }

  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(__dirname, decodeURIComponent(reqPath));

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.stat(filePath, (err2, stats2) => {
      if (err2 || !stats2.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const mime = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      fs.createReadStream(filePath).pipe(res);
    });
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
  console.log(`- Golden Triangle Victoria Falls: http://127.0.0.1:${PORT}/`);
  console.log(`- Dayrest Harare (Expedia Clone): http://127.0.0.1:${PORT}/dayrest-harare/`);
  console.log(`- Dayrest Harare Extranet:        http://127.0.0.1:${PORT}/dayrest-harare/extranet.html`);
});
