var fs = require("fs");

var express = require('express')
var app = express()
var server = require("http").Server(app);
var router = express.Router()
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var io = require("socket.io")(server);



router.post('/', urlencodedParser, function (req, res) {
    var pass64 = req.body.image;
    let length=  pass64.length;
    var io = require('../index').io;
    //var pass64 = Buffer.from(pass).toString('base64');
    console.log("PASS 64:" + length);
    let buff = new Buffer(pass64, 'base64');
    var name  = getTime();
    fs.writeFileSync("./public/image/"+name + ".png", buff);
      res.send("Successful");
    io.sockets.emit("server-send-new-file",name+".png");

});

router.get('/',function(req,res){
    res.render('trangchu.ejs');
})

function getTime(){
    var date = new Date();
    var name = date.getHours()+"H-" + date.getMinutes()+ "M-"+date.getSeconds() +"S-"+ date.getFullYear() + "-" + date.getMonth() +"-"+date.getDate();
    return name;
  }
module.exports = router;