Node.js 学习笔记
================


### part 1. 学习HelloWorld, Node.js模块

Origin： http://www.nodebeginner.org/index-zh-cn.html 

Node.js是事件驱动

回调

分模块

使用路由

调用顺序：index(程序入口) -> server(接受请求参数，解析出pathname) -> router(根据pathname匹配handle中的参数，如果是函数类型，则调用对应的requestHandler, 否则就是没有此requestHandler) -> requestHandlers(根据参数，调用真正的处理函数)

关于阻塞与非阻塞操作：Node中应避免阻塞操作，多使用非阻塞操作。

事件轮询（event loop）

普通POST功能，上传文本数据

图片上传功能：使用外部模块

### part 2. 第二部分

Origin: https://github.com/alsotang/node-lessons

0、安装nvm(Node Version Manager)，使用nvm安装Node

1、使用express模块完成一个Hello的例子。之前的part01里都是调用Node自己的http方法实现的。这里的express相当于Framework。

2、使用express和utility完成计算功能。要点1：使用npm init命令生成自定义的package.json。要点2：使用package.json来管理项目依赖，npm install后面加--save参数即可自动将项目的依赖写入package.json

3、编写Node爬虫，依赖superagent实现http请求，依赖cheerio实现获取dom节点数据。

4、使用eventproxy控制并发，这个不错！

5、使用async控制并发连接数，略吊~~

6、编写javascript测试驱动，学习mocha测试框架，should断言，istanbul测试率覆盖工具，学习写Makefile

7、浏览器端测试，使用chai和phantomjs
