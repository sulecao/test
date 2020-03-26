const express = require('express');     //引入express模块
var app= express();     //express()是express模块顶级函数

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});




app.get("/",function(req,res){
    res.send(`<h1>主11页</h1>`);
});


app.get('/public/images/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
})
  
app.get('/public/html/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "/public/html/index.html" );
   console.log("Request for " + req.url + " received.");
})

app.get("/login",function(req,res){
    res.send('登录页面');
});
app.get("/registe",function(req,res){
    res.send('注册页面');
});

app.listen(8081);       //设置访问端口号