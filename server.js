// Setup empty JS object to act as endpoint for all routes
projectData = {
    name : 'Abhijeet',
    temp : '294.13',
    date : '5.11.2021',
    content : 'Feeling Cold',
};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser')
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

app.get('/getdata', function (req, res) {
    res.send(projectData);
  })

app.post('/postdata', (req, res) => {
    projectData = req.body;
    res.send(projectData);
});