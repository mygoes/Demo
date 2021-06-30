var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var sql = "select * from cate"; // cate 是数据表的名称
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log("连接错误：" + err);
    } else {
      res.send({
        "list": data
      });
    }
  }
});

module.exports = router;
