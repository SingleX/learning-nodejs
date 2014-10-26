var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function post(response){
    console.log("RequestHandler 'post' was called");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post" enctype="multipart/form-data">'+
        '<input type="file" name="upload" multiple="multiple">' +
        '<input type="submit" value="upload" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}


function start(response){
    console.log('RequestHandler "start" was called');

    exec("ls -lah", function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();    
    });
}

function upload(response, request){
    console.log('RequestHandler "upload" was called'); 

    var form = new formidable.IncomingForm();
    console.log("about to parse...");
    form.parse(request, function(error, fields, files){
        console.log("parseing done!");
        fs.renameSync(files.upload.path, "/tmp/test.png");
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("upload data:");
        response.write("<img src='/show'/>");
        response.end();
    })


}

function show(response){
    console.log("RequestHandler 'show' was called");
    fs.readFile("/tmp/test.png", "binary", function(error, file){
        if(error){
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write(error + "\n");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.show = show;
exports.post = post;
exports.start = start;
exports.upload = upload;
