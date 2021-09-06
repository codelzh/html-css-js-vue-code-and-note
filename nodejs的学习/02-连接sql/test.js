const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: 'a3057651384@gmail.com',
    pass: 'tlfvmphwnssqiqal'
  }
});

let mailDetails = {
  from: 'a3057651384@gmail.com',
  to: '3057651384.com',
  subject: 'Test mail',
  text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log('Error Occurs');
  } else {
    console.log('Email sent successfully');
  }
});

