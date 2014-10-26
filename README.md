Node.js 学习笔记
================


### 1. 学习HelloWorld嘿嘿嘿

Node.js是事件驱动

回调

分模块

使用路由

调用顺序：index(程序入口) -> server(接受请求参数，解析出pathname) -> router(根据pathname匹配handle中的参数，如果是函数类型，则调用对应的requestHandler, 否则就是没有此requestHandler) -> requestHandlers(根据参数，调用真正的处理函数)

关于阻塞与非阻塞操作：Node中应避免阻塞操作，多使用非阻塞操作。

事件轮询（event loop）


