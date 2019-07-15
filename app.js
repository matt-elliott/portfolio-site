(function() {
const express = require('express');
const app = express();
const vue = require('vue');
const port = 1111;

//set view as template engine
// app.set('views', './Views');
app.set('view engine', pug);
//set up routes
app.get('/', function(req,res) {
  res.render('index.html');
})

//start server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
}());