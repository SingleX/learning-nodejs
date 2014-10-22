var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.write('Hello, here is a HTTP server : http://localhost:8888');
    response.end();
}).listen(8888);
