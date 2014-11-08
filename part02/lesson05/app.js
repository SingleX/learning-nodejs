var async = require('async');

var count = 0;
var fetchUrl = function(url, callback){
    var delay = parseInt((Math.random()*10000000) % 2000, 10);
    count++;
    console.log("当前并发连接数：" + count, ", fetching：" + url, ", cost time: " + delay + "ms");
    setTimeout(function(){
        count--;
        callback(null, url+"html content");
    }, delay);
};

var urls = [];
for(var i = 0; i<30; i++){
    urls.push("http://xxx.com/"+i);
}

async.mapLimit(urls, 5, function(url, callback){
    fetchUrl(url, callback);
}, function(err, result){
    console.log("final:");
    console.log(result);
});
