const nodemailer = require("nodemailer");

  let user = "buivanhoa9x@gmail.com";
  let pass = "buivanhoa123";

  let transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user,
      pass
    }
});
  // send mail with defined transport object
  var message = {
    from: user+"@gmail.com",
    to: "buivanhoa99@gmail.com",
    subject: "Message title",
    text: "hihihi",
    html: "<p>Automated mailer</p>"
  };


var SendMail = function (receiver){
    message.to = receiver;
    transporter.sendMail(message,function(err,info){
        if (err){
            return console.log(err.message +"")
        }
        else
            console.log("Message sent: "+ info.response);
    });
}

module.exports = {
    SendMail
}
