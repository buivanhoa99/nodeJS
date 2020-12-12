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


router.get("/images/user/:id",(req,res)=>{
  let user = req.params.id;
  if (user!="all"){
    accountModel.findOne({username:user},(err,result)=>{
      
      if (result){
        output = []
        result.image.forEach(e=>{
          obj = {
            user : user,
            name : e.name,
            time : e.time,
            des  : e.des,
          }
          output.push(obj)
        })
        res.send(output)
      }
      else 
      res.send("ERROR!");
    })
    }
  else
    {
      accountModel.find({},(err,result)=>{
        output =[]
        result.forEach(e=>{
          e.image.forEach(e1=>{
            obj = {
              user : e.username,
              name : e1.name,
              time : e1.time,
              des  : e1.des,
            }
            output.push(obj)
          })
        })
        res.send(output)
      })
    }
})

router.get("/users",(req,res)=>{
  accountModel.find((err,result)=>{
    let Users = [];
    result.forEach((value)=>{
      Users.push({"user":value.username})
    })
    res.send(Users);
  })
})

module.exports = router