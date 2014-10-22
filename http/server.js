var http = require('http');

function handle(request, response){
    console.log('request received...');
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.write('Hello, here is a HTTP server : http://localhost:8888');
    response.end();
}
http.createServer(handle).listen(8888);

console.log('Server start !');

