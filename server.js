const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = __dirname;
const port = Number(process.env.PORT || 3000);
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const relativePath = pathname === '/' ? 'index.html' : pathname === '/manus-routes.json' ? 'public/manus-routes.json' : pathname === '/park-mark.svg' ? 'public/park-mark.svg' : pathname.replace(/^\/+/, '');
  const resolved = path.resolve(projectRoot, relativePath);
  const relative = path.relative(projectRoot, resolved);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    response.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  fs.readFile(resolved, (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'content-type': 'text/plain; charset=utf-8' });
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }
    response.writeHead(200, {
      'content-type': contentTypes[path.extname(resolved)] || 'application/octet-stream',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff'
    });
    response.end(content);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`智慧园区角色门户运行于 http://0.0.0.0:${port}`);
});
