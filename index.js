app=require("express");
const {db}=require("./conn.js")
require("ejs");
server=app();
//Set View Engine To EJS
server.set("view engine", "ejs");
//Set Static Directory
server.use(app.static(__dirname));

server.get("/",(req,res)=>{
    console.log("my route")
    res.render("hello",{'a':22} );
});

server.get('/about', function(req, res) {  res.render('hello');});


server.listen(
    3000
);