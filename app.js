const express = require('express');
const bodyParser = require("body-parser");
//const path    = require("path");
const nodemailer = require('nodemailer');
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
    let count = req.body.count;
    let decision = req.body.decision;
    let comments = req.body.comments;
    let names = []; 
    let foods = [];
    for (let i = 1; i < count+1; i++) {
      var name = "name" + i; 
      var food = "food" + i;
      names.push(req.body[name]);
      foods.push(req.body[food]);
       
    }
     
    let htmlmail = `<!DOCTYPE html><html>
    <head><title>new confirmation</title></head>
    <body>
      <h1>New Invitation response!</h1> 
      <h4>Dear Marina and Ahmed, you have recieved a new response from ${names[0]} , s/he says ${decision} ` ;
      if(decision == 'Yes') 
          {
            htmlmail = htmlmail + ` and s/he will come with ${count-1} of his/her family</h4> `;
            htmlmail = htmlmail + `<h5>also find the rest of his/her answers as the following:</h5> 
            <table style="border: 1px solid black; border-collapse: collapse;"> 
              <tr> 
              <th style="border: 1px solid black; border-collapse: collapse; ">Name</th> 
              <th style="border: 1px solid black; border-collapse: collapse;">Allergies</th> </tr>`; 
              for (let j = 0; j < count; j++) {
               htmlmail =  htmlmail + `<tr> 
                            <td style="border: 1px solid black; border-collapse: collapse;">${names[j]}</td> 
                            <td style="border: 1px solid black; border-collapse: collapse;">${foods[j]}</td> 
                           </tr> 
                       `;
                
              }
          }
      
      let emailending =  `</table><p>Finally they left you a comment: ${comments}</p><h5> I will make sure to keep you updated, if any new responses come!, Have an nice day =)</h5> </body> </html>`;
      htmlmail +=emailending;
    let mailOptions = {
        from: 'ahmedmarinawedding@gmail.com',
        to: 'ahmed.khairy.mohammed@gmail.com, marremaj@gmail.com',
        //to: 'ahmed.khairy.mohammed@gmail.com',
        subject: 'New Invitation Response',
        html: htmlmail
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent');
        }
      }); 


    res.render('thankyou');
});
//emails
let transporter = nodemailer.createTransport({
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