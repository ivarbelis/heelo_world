const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
 console.log(req.headers);
 res.statusCode = 200;
 res.end('<html><body><h1>Hello, World!!!!!!!OOOOO</h1></body></html>');
})
server.listen(port, hostname);
