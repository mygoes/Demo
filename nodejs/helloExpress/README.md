## 资源地址
bilibili：https://www.bilibili.com/video/BV1A7411N7KZ?p=2&spm_id_from=pageDriver

## 检查环境
`node -v`
`npm -v`
`express --version`

## express创建项目
`express 项目名`

## 步骤
1. 改写`app.js`文件
   + 导入`http`模块:
   `var http = require('http');var server = http.createServer(app);`
   + 不用再`module.exports = app;`暴露出去，直接`server.listen("3000");`监听端口即可。
   + 到此可以删除`bin`目录了。
2. 安装`mysql`
    命令：`npm install mysql --save`
3. 创建一个新的`mysql`库
    创建一个新的表，之后就可以在项目中连接表了
4. 连接表
   新建`/util/dbconfig.js`


