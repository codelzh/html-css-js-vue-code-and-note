# node本身的http

node本身实现了http，我们可以用，但是功能太少。

# Node 和 Express

express是基于node的web框架，实现了很多功能

## 安装

安装Express之前先确定安装了node.js环境和npm包管理工具。

这个是express cli

```bash
npm install express-generator -g
```



这个是环境，安装在项目的包下面

```bash
npm install express
```



## 使用express cli创建应用

安装好express后，进入要创建应用的目录。cmd输入以下命令

```bash
//创建名字为helloworld的项目
express helloworld
```



用下列命令可为 helloworld 应用安装所有依赖

```bash
npm install
```



这是目录结构

![](https://pic.imgdb.cn/item/611dca4c4907e2d39cf3bfe0.jpg)





输入下面命令，启动serve服务

```bash
SET DEBUG=helloworld:* & npm start
```

![](https://pic.imgdb.cn/item/611dcbc94907e2d39cf726f8.jpg)





# express的模块化(路由)

在router下创建user.js

```js
//user.js
var express = require('express');
var router = express.Router();

//api
router.get('/', function(req, res, next) {
  res.send("abc");
});

//api
router.get('/login', function(req, res, next) {
  res.send("登录");
});

//导出
module.exports = router;

```



在app.js加载路由模块

```js
var express = require('express');
var app = express();

//使用路由
var r1 = require("./routes/index");
app.use("/user",r1);

//开启serve服务
var server = app.listen(3000, function () {
  console.log("成功开启");  
});
```



应用即可处理发自  /user  和  /user/login  的请求





# 中间件

https://www.w3cschool.cn/expressapi/expressapi-using-middleware.html

看文档就行



# 连接数据库

https://github.com/mysqljs/mysql#establishing-connections	文档

安装js封装好的mysql

```bash
npm install mysql
```



使用

```js
//引入mysql
var mysql = require('mysql');
//创建连接信息
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'

});

//连接
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

//执行查询
connection.query("select * from onetest", function (error, results, fields) {
  console.log(error);
  console.log(results);
})
```



