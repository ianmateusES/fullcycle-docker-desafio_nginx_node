const http = require('http');
const mysql = require('mysql2');
const url = require('url');
const { parse } = require('querystring');

// Configuração do banco de dados
const dbConfig = {
  host: 'mysql',
  user: 'root',
  password: '123456',
  database: 'fullcycle'
};

const connection = mysql.createConnection(dbConfig);

const server = http.createServer((req, res) => {
  const headerDefault = { 'Content-Type': 'text/plain' };
  const { method, url: reqUrl } = req;
  const { pathname } = url.parse(reqUrl, true);

  if (method === 'GET' && pathname === '/') {
    // Consultar dados do banco de dados
    connection.query('SELECT * FROM peplos', (error, results) => {
      if (error) {
        res.writeHead(500, headerDefault);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Full Cycle Rocks!</h1>');
        if (results) {
          res.write('<ul>');
          results.forEach((row) => {
            res.write(`<li>${row.name}</li>`);
          });
          res.write('</ul>');
        }
        res.end();
      }
    });
  } else if (method === 'POST' && pathname === '/') {
    // Processar dados do corpo da requisição
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);

      // Inserir nome no banco de dados
      connection.query('INSERT INTO peplos (name) VALUES (?)', [name], (error) => {
        if (error) {
          res.writeHead(500, headerDefault);
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, headerDefault);
          res.end('Name added successfully!');
        }
      });
    });
  } else {
    res.writeHead(404, headerDefault);
    res.end('Not Found');
  }
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
