var fs = require('fs')
var express = require("express");
var app = express();

var userRouter = require('./routes/user.route')
app.use(express.static("public"));



app.set("view engine","ejs");
app.set("views","./views");
app.use(express.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));

var onlineUsers =[];
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(80);

const dir = './public/image/';

io.on("connection",function(socket){
  socket.on("client-get-files",function(){
    fs.readdir(dir, (err, files) => {
    socket.emit("server-send-files",files);
  });
  });
});

app.use('/',userRouter)



module.exports = {
  io
}
