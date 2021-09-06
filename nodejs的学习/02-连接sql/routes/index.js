var express = require('express');
var router = express.Router();


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



module.exports = router;