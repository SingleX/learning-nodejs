//事件代理的东西，控制并发
var eventproxy = require('eventproxy');

var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';

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
    //console.log(topicUrls);

    //并发获取咩个topic的数据，等全部获取完毕后回调after()函数
    var ep = new eventproxy();
    ep.after('topic_html', topicUrls.length, function(topics){
        // 如果topic_html被触发达到topicUrls.length次，执行此
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

    // 获取详情页的信息，并返回数据
    var i = 0;
    topicUrls.forEach(function(topicUrl){
        console.log("并发连接数：" + (++i));
        superagent.get(topicUrl)
        .end(function(err, res){
            console.log('fetch ' + topicUrl + ' done.');
            ep.emit('topic_html', [topicUrl, res.text]);
        });
    });
});
