require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const messageSlack = require('./utils/messageSlack');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set express to look at static files from assets folder
app.use('/assets/', express.static('./assets/'));
//set view as template engine
app.set('views', './Views');
app.set('view engine', 'ejs');
//set up routes
app.get('/', function(req,res) {
  res.render('index');
});

app.get('/portfolio', (req,res) => {
  res.render('portfolio');
});

app.get('/contact', (req,res) => {
  res.render('contact');
});

app.post('/api/contact', (req, res) => {
  // console.log('new api request to /api/contact: ',req.body);
  messageSlack(req.body.data);
  res.end();
});

//start server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});