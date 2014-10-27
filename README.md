Node.js 学习笔记
================


### part 1. 学习HelloWorld, Node.js模块

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
