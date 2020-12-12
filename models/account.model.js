var mongoose = require('mongoose');
var account = new mongoose.Schema({
    username: String,
    password: String,
    image : [
      {
        name : String,
        time : String,
        des  : String,
      }
    ]
  }, { 
      versionKey: false 
  });
module.exports = mongoose.model('account',account,'account');