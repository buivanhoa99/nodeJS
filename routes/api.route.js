var fs = require("fs")
var express = require('express')
var router = express.Router()
const accountModel = require('../models/account.model')

var dir = require("../configure").dir

router.post('/login', function (req, res) {
    value = {
      userName :req.body.userName,
      passWord :req.body.passWord
    }
    console.log(value)
    var AccouctModel = require("../models/account.model")
    console.log(accountModel)
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

router.get("/images",(req,res)=>{
    fs.readdir(dir, (err, files) => {
        console.log("Gui list file");
        res.send(files);
      });
})

module.exports = router