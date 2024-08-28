// Importing required modules
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Sending response
  res.end('Hello, world!\n');
});

// Setting port number
const port = 3000;

// Binding server to port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
