var express = require('express');
var bodyParser = require('body-parser');

var showsController = require('./controllers/shows-controller.js');

var logQuery = function(req, res, next){
  console.log(req.path);
  console.log(req.query);
  next();
}

var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());

//app.use(logQuery);


  //shows?genre=comedy  ===== {{genre: 'comedy'} === req.query
  //uses req.query instead of req.params
app.get('/shows', logQuery, showsController.index);//can add extra function
//app.get('/shows/last',showsController.last);  //commenting out cuz not clear
app.get('/shows/:id',showsController.show);
app.post('/shows',logQuery, showsController.create);
app.delete('/shows/:id',showsController.destroy);

app.listen(3000, function(){
  console.log('app starting on port 3000');
});
