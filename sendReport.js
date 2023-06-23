const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'edward.ngugi@thejitu.com',
    pass: 'xvxjxeeokhvbbrqn'
  }
});
const mailOptions = {
  from: ['edward.ngugi@thejitu.com'],
  to: ['edward.ngugi@thejitu.com'],
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
