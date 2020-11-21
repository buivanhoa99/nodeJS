var fs = require("fs");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var onlineUsers =[];
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8080);

const dir = './public/image/';

io.on("connection",function(socket){
  socket.on("client-get-files",function(){
    fs.readdir(dir, (err, files) => {
    socket.emit("server-send-files",files);
    console.log(files);
  });
  });
});



app.post('/', urlencodedParser, function (req, res) {
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

