const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Students!');
});

server.listen(3000, () => {
    console.log('Server is running on Port 3000');
});