var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next){
    superagent.get('http://cnodejs.org/')
    .end(function(err, sres){
        if(err) {
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items=[];
        $('#topic_list .cell').each(function(k ,v){
            var $v = $(v);
            items.push({
                title:$v.find('.topic_title').attr('title'),
                href:$v.find('.topic_title').attr('href'),
                date:$v.find('.last_active_time').text(),
                author:$v.find('.user_avatar img').attr('title'),
                reply:$v.find('.count_of_replies').text().replace(/[^0-9]/ig,''),
                visit:$v.find('.count_of_visits').text().replace(/[^0-9]/ig,'')
            });
        });
        res.send(items);
    });
});

app.listen(3000, function(req, res){
    console.log('server is started at port 3000');
});
