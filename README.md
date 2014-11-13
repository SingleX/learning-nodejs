Node.js 学习笔记
================

[![Build Status](https://travis-ci.org/SingleX/learning-nodejs.svg?branch=master)](https://travis-ci.org/SingleX/learning-nodejs)

*去搞了个这个东西来，哈哈哈*

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

### part 2. Github找的一个教程

Origin: https://github.com/alsotang/node-lessons

0、安装nvm(Node Version Manager)，使用nvm安装Node

1、使用express模块完成一个Hello的例子。之前的part01里都是调用Node自己的http方法实现的。这里的express相当于Framework。

2、使用express和utility完成计算功能。要点1：使用npm init命令生成自定义的package.json。要点2：使用package.json来管理项目依赖，npm install后面加--save参数即可自动将项目的依赖写入package.json....-dev参数的作用是：可以通过--product参数忽略devDependence的依赖，总之就是开发用。

3、编写Node爬虫，依赖superagent实现http请求，依赖cheerio实现获取dom节点数据。

4、使用eventproxy控制并发，这个不错！

5、使用async控制并发连接数，略吊~~

6、编写javascript测试驱动，学习mocha测试框架，should断言，istanbul测试率覆盖工具，学习写Makefile

7、浏览器端测试，使用chai和phantomjs

8、supertest测试。nodemon好用的自动重启node工具。cookie持久化

9、正则表达式。。。。哪里都有它~~~~

10、Benchmark。测试干成同一件事时，不同方法的执行效率比较

11、一些很重要的知识点

    a）作用域。全局变量与局部变量。函数级与块级作用域。

    b）闭包。使内部函数可以访问定义在外部函数中的变量。

    c）this。有所属对象时指向所属对象，没有所属对象是指向全局对象，new出来的指向新对象，apply/call的指向绑定的对象。

12、线上部署。heroku

13、在线travis对app进行持续集成测试

14、关于js中的最佳实践。介绍的书不错

15、安装使用Mongodb, 使用mongoose连接Mongodb操作数据库

16、express中的cookie。内存中的session。redis做缓存，存储session，主要为了状态共享。

17、Promise。这个东西没有完全看懂，貌似有基础知识空缺，，，恶补。。。
