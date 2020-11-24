var fs = require("fs");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(80);
const Database = require('./models/database');
const accountModel = require("./models/account.model");
const dir = './public/image/';

io.on("connection",function(socket){
    socket.on("client-get-files",function(){
    fs.readdir(dir, (err, files) => {
    socket.emit("server-send-files",files);
  });
  });
});


app.use(urlencodedParser);

app.post('/', function (req, res) {
    value = {
      time : req.body.time,
      userName : req.body.userName
    }
    console.log(value);
    var pass64 = req.body.image;
    let length=  pass64.length;
    //var pass64 = Buffer.from(pass).toString('base64');
    console.log("PASS 64:" + length);
    let buff = new Buffer(pass64, 'base64');
    var name  = getTime();
    fs.writeFileSync("./public/image/"+name + ".png", buff);
      res.send("Successful");
    io.sockets.emit("server-send-new-file",name+".png");
    
  });
function getTime(){
  var date = new Date();
  var name = date.getHours()+"H-" + date.getMinutes()+ "M-"+date.getSeconds() +"S-"+ date.getFullYear() + "-" + date.getMonth() +"-"+date.getDate();
  return name;
}

app.get("/",function(req,res){
  res.render("trangchu");
  });


app.get("/login",(req,res) =>{
  res.render('login');
});
 
app.post('/login', function (req, res) {
  value = {
    userName :req.body.userName,
    passWord :req.body.passWord
  }
  console.log(value)
  var AccouctModel = require("./models/account.model");
  accountModel.findOne({username:value.userName},(err,kq)=>{
    if (!kq) {
      res.render("login")
    }
    else {
      console.log("co tim thay"+kq);
      if (kq.password == value.passWord) {
        res.render("trangchu",{userName:value.userName})
      }
       else {
        res.render("login")
       }
    }
})
})

app.post('/api/login', function (req, res) {
  value = {
    userName :req.body.userName,
    passWord :req.body.passWord
  }
  console.log(value)
  var AccouctModel = require("./models/account.model");
  accountModel.findOne({username:value.userName},(err,kq)=>{
    if (!kq) {
      console.log("Khong thay kq");
      res.send("0");
    }
    else {
      console.log("co tim thay"+kq);
      if (kq.password == value.passWord) {
        res.send("1");
      }
       else res.send("0");
    }
})
})