var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(req, res){
    var type = req.query.type;
    var q = req.query.q;
    if(type == 'md5'){
        var md5Value = utility.md5(q);     
        res.send('md5(' + q + ')=' + md5Value);
    }else if(type == 'sha1'){
        var sha1Value = utility.sha1(q);
        res.send('sha1(' + q + ')=' + sha1Value);
    }else{
        res.send('no data ....');
    }



});

app.listen(3000, function(req, res){
    console.log('app started at 3000 port');
});
