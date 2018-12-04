var nodemailer = require('nodemailer');

module.exports.contactMail = function(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'iaspreparationdel@gmail.com',
          pass: 'Insight@123'
        },
        tls: { rejectUnauthorized: false }
      });
      var mailOptions = {
        from: 'iaspreparationdel@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        html: '<h1>Welcome to Insight IAS</h1><p>We received your query & will get back to you, Thanks for your mail '+req.body.name +'</p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(401);
          return
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200);
          return
        }
      });
};
