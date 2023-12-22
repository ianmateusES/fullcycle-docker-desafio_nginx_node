const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Full Cycle Rocks!</h1>');
});

const port = 3333;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
