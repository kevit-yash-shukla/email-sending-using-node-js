let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yash.shukla@kevit.io',
        pass: 'Yas@8921'
    }
});
let mailOptions = {
    from: 'yash.shukla@kevit.io',
    to: 'yash.shukla@kevit.io',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});