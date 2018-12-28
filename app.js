const express = require('express');
const bodyParser = require("body-parser");
//const path    = require("path");
var nodemailer = require('nodemailer');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//middlewares
app.set('view engine', 'ejs');
app.use(express.static('statics'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => res.render('index'));
app.get('/confirm', (req, res) => res.render('confirm'));

app.post('/confirm', (req, res) => {
    // name, decision, count, food, otherfood, gifts, comments, submit
    var name = req.body.name;
    var decision = req.body.decision;
    var count = req.body.count;
    var food = req.body.food;
    var otherfood = req.body.otherfood;
    var gifts = req.body.gifts;
    var comments = req.body.comments;
    var htmlmail = `<!DOCTYPE html><html><head></head><body><h1>New Invitation response!</h1> <h4>Dear Marina and Ahmed, you have recieved a new response from ${name} , he says ${decision}</h4> <h5>also find the rest of his answers as the following:</h5> <table style="border: 1px solid black; border-collapse: collapse;"> <tr> <th style="border: 1px solid black; border-collapse: collapse; ">Name</th> <th style="border: 1px solid black; border-collapse: collapse;">Decision</th> <th style="border: 1px solid black; border-collapse: collapse;">Family count</th> <th style="border: 1px solid black; border-collapse: collapse;">Food requested</th> <th style="border: 1px solid black; border-collapse: collapse;">Other food</th> <th style="border: 1px solid black; border-collapse: collapse;">Gifts</th> <th style="border: 1px solid black; border-collapse: collapse;">comments</th> </tr> <tr> <td style="border: 1px solid black; border-collapse: collapse;">${name}</td> <td style="border: 1px solid black; border-collapse: collapse; ">${decision}</td> <td style="border: 1px solid black; border-collapse: collapse;">${count}</td> <td style="border: 1px solid black; border-collapse: collapse;">${food}</td> <td style="border: 1px solid black; border-collapse: collapse;">${otherfood}</td> <td style="border: 1px solid black; border-collapse: collapse;">${gifts}</td> <td style="border: 1px solid black; border-collapse: collapse;">${comments}</td> </tr> </table><h5>I will make sure to keep you updated, if any new responses come!, Have an nice day =)</h5> </body> </html>`
    var mailOptions = {
        from: 'ahmedmarinawedding@gmail.com',
        to: 'ahmed.khairy.mohammed@gmail.com, marremaj@gmail.com',
       // to:'',
        subject: 'New Invitation Response',
        html: htmlmail
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 


    res.render('thankyou');
});
//emails
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmedmarinawedding@gmail.com',
    pass: 'marina@ahmed123'
  }
});



/* transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */



//server
app.listen(port, () => console.log(`weddingsite app listening on port ${port}!`))