const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  setTimeout(() => {
    res.end(JSON.stringify({ message: 'Hello from Node.js' }));
  }, 5000); 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});