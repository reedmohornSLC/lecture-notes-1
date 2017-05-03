

var showsModel = require('../models/shows.js');//we have to add another '.'
//since we are in controllers folder and it will lookk for model folder in
//that which isbad. this is getting shows data into the contorllers scope 



module.exports = {
  index: function(req,res,next){

  if(req.query.genre){
    var filteredShows = shows.filter(function(show){
      return show.genre === req.query.genre; //keeps if true
    });
    return res.status(200).json(filteredShows);
  }
  res.status(200).json(shows);
},

show: function(req, res, next){

    var showId = parseInt(req.params.id);//comes back as string so parse it

  res.status(200).json(shows[showId]);
},

create: function(req,res,next){
  shows.push(req.body);
  res.status(200).json(shows);
},

destroy: function(req,res,next){
  var deletedShow = shows.splice(req.params.id,1)[0];
  res.status(200).json(deletedShow);
}

};
