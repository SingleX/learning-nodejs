var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received...');

        var content = route(handle, pathname);

        response.writeHead(200, {'Content-Type': 'text-plain'});
        response.write('Hello, here is a HTTP server : http://localhost:8888<br>');
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server started !');
}

exports.start = start;
