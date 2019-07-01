const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer

    .createTransport('smtps://your_addr@gmail.com:you_password@smtp.gmail.com');
        let mailOptions = {
            from : "your_adress@gmail.com",
            to : "receiver_adress@gmail.com",
            subject : "first testing",
            text: "Plan text body",
        }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){console.log(error)}
        console.log(" Message Sent : %s", info.messageId);
        console.log("Preview URL: %s",
        nodemailer.getTestMessageUrl(info));
    })
    })
