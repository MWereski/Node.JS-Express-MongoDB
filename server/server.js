const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, "OK", {'Content-Type': 'text/html'})
    response.end('<h1>Its Working!!!</h1>')
});

server.listen(5500, '127.0.0.1', () => console.log("SERVER IS ON"));