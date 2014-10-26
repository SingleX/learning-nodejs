var exec = require("child_process").exec;

function post(response, postData){
    console.log("RequestHandler 'post' was called");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}


function start(response, postData){
    console.log('RequestHandler "start" was called');

    exec("ls -lah", function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();    
    });
}

function upload(response, postData){
    console.log('RequestHandler "upload" was called'); 
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("upload data: " + postData);
    response.end();
}

exports.post = post;
exports.start = start;
exports.upload = upload;
