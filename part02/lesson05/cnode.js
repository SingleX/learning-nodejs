//事件代理，控制并发数
var async = require("async");

var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';

var count = 0;
var fetchUrl = function(url, callback){
    count++;
    console.log("当前并发连接数：" + count, ", fetching：" + url);
    superagent.get(url)
    .end(function(err, res){
        count--;
        console.log('fetch done.');
        callback(null, [url, res.text]);
    });
}

superagent.get(cnodeUrl)
.end(function(err, res){
    if(err){
        return console.log(err);
    }

    // 从首页获取所需要的url放到[]中
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function(idx, element){
        var $element = $(element);
        var href = url.resolve(cnodeUrl, $element.attr('href'));
        topicUrls.push(href);
    });

    // 获取详情页的信息，并返回数据
    async.mapLimit(topicUrls, 5, function(url, callback){
        fetchUrl(url, callback);    
    }, function(err, topics){
        //最后调用此函数现实结果，哇咔咔
        topics = topics.map(function(topicPair){
            var topicUrl = topicPair[0];
            var topicHtml = topicPair[1];
            var $ = cheerio.load(topicHtml);
            return ({
                title:$('.topic_full_title').text().trim(),
                href:topicUrl,
                comment1:$('.reply_content').eq(0).text().trim(),
                author1:$('.reply_author').eq(0).text().trim()
            });
        });
        console.log('final:');
        console.log(topics);
    });

});
