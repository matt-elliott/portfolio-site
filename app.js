(function() {
const express = require('express');
const app = express();
const vue = require('ejs');
const port = 1111;

//set express to look at static files from assets folder
app.use('/assets/', express.static('./assets/'));
//set view as template engine
app.set('views', './Views');
app.set('view engine', 'ejs');
//set up routes
app.get('/', function(req,res) {
  res.render('index');
});

app.get('/portfolio', function(req,res) {
  res.render('portfolio');
});

app.get('/assets/*', function(req,res) {
  res.send(res);
})

//start server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
}());