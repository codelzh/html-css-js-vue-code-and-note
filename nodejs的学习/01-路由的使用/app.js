var express = require('express');
var app = express();

//使用路由
var r1 = require("./routes/index");
app.use("/user",r1);

var server = app.listen(3000, function () {
  console.log("成功开启");  
});