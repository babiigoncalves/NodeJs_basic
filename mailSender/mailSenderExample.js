var nodeMailer = require('nodemailer');

var source = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'yourmail@gmail.com',
        pass: 'passwd'
    },
    tls: { rejectUnauthorized: false }
});

var destination = {
    from: 'yourmail@gmail.com',
    to: 'friend@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi there! This is my test with Node.js!! :)' 
};

source.sendMail(destination, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    source.close();
})
