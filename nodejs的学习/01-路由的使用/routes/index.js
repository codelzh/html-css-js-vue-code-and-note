var express = require('express');
var router = express.Router();




//路由的使用
router.get('/', function (req, res, next) {
  res.send("abc");
});

router.get('/user', function (req, res, next) {
  res.send("user");
});

module.exports = router;