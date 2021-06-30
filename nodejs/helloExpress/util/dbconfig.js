const mysql = require("mysql");

module.exports = {
    /**
    * @description:1、数据库配置
    * @param {type} host 主机
    * @param {type} post 端口号
    * @param {type} user 用户名
    * @param {type} password 密码
    * @param {type} database 数据库名
    */
    config: {
        host: "localhost",
        post: "3306",
        user: "helloExpress",
        password: "123456",
        database: "helloExpress"
    },

    /**
    * @description:2、连接数据库（通过连接池）
    * @param {type} sql sql语句
    * @param {type} sqlArr sql数组
    * @param {type} callBack 回调
    * @return: 
    */
    sqlConnect: function (sql, sqlArr, callBack) {
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            if (err) {
                console.log("连接失败");
                return;
            }
            // 事件驱动回调
            coon.query(sql, sqlArr, callBack);
            // 释放连接
            coon.release();
        })
    }
}