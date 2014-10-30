// 引入express模块
var express = require("express");
// 实例化express给app
var app = express();
// app的常用方法：get、post、put/patch、delete。
app.get("/", function(req, res){
    res.send("Hello...");
});
// 监听3000端口
app.listen(3000, function(){
    console.log('app is listening port: 3000');
});
