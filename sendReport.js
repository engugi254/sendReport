const nodemailer = require('nodemailer');
require("dotenv").config()

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
});
const mailOptions = {
  from: 'engugi504@gmail.com',
  to: ['jonathan.mwaniki@thejitu.com'],
  subject: 'Weekly Report 8',
  text: 'I have attached my file below.',
  attachments: [
    {
      path: '/Users/Admin/Desktop/Week8Report.docx'
    }
  ]
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
