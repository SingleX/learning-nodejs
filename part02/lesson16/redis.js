//需要安装redis。

var express = require('express');
var session = require('express-session');
var redisStorage = require('connect-redis')(session);

var app = express();
app.listen(3000);

app.use(session({
    store:new redisStorage(),
    secret:'xxxxxxxxxxxxxx'
}));

app.get('/', function(req, res){
    if(req.session.isVisit){
        req.session.isVisit++;
        res.send('welcome back , times:' + req.session.isVisit);
    }else{
        req.session.isVisit = 1;
        res.send('welcome new !');
    }
});
