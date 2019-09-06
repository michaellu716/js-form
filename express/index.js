const express = require('express');
const app = express();

//body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  //serve static files in express
    res.send(index.html);
});

app.post('/', (req, res) => {
    res.send('An alligator departs!');
});

//get message from http request
app.post('/message', (req, res) => {
    //console.log(req.query.message)
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    res.send("hey we got your message " + firstName + " " + lastName + "'s phone number is " + phone);
});
//respond with the message user input


app.listen(3000, () => console.log('Gator app listening on port 3000!'));

//create form
//when submitting form, redirect message and return it using this url
//form action url and method post
//get form body
//use div instead of a form
//then use js


//create new form and put all of this into a project file

//without refreshing page, create element to display the message on bottom of page, no form tag, use fetch api similar to the starwars
//how to submit form encoded data using fetch api
