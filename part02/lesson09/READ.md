正则表达式

### 后缀:/xxx/igm
i：不区分大小写
g：匹配多个
m：意思是^和$可以匹配每一行的开头

\A:字符串开头
\Z:字符串结束或行尾
\z：字符串结束

g 参数会影响一些函数的返回值：
String.prototype.match();
RegExp.prototype.exex();
