var mongoose = require('mongoose');
var moment = require('moment');
var News = mongoose.model('News');

module.exports.newsRead = function(req, res) {
  var queryObject = {};
  if(req.query.startDate && req.query.endDate){
    var endDate = new Date(req.query.endDate);
    endDate = endDate.setDate(endDate.getDate() + 1);
    queryObject = {date: {"$gte": new Date(req.query.startDate), "$lt": new Date(endDate)}};
  }else if(req.query.startDate){
    var endDate = new Date(req.query.startDate);
    endDate = endDate.setDate(endDate.getDate() + 1);
    queryObject = {date: {"$gte": new Date(req.query.startDate), "$lt": new Date(endDate)}};
  }else{
    var todaysDate = new Date();
    todaysDate = todaysDate.setDate(todaysDate.getDate() - 1);
    queryObject = {date: {"$gte": new Date(todaysDate)}};
  }
  if( req.query.type && req.query.type !="undefined"){
    queryObject = {
      $and : [
        { intger : {"$eq" : req.query.type }},
        queryObject
      ]
    }
  }
  console.log('QUERY'+ JSON.stringify(queryObject));
  News.find(queryObject).exec(function(err, news) {
    res.status(200).json(news);
  });
};


module.exports.saveCAData = function(req, res) {
  var news = new News();
  console.log("entered");

  news.subject = req.body.newsType;
  news.title = req.body.newsTitle;
  news.subtitle = req.body.newsSubCategory;
  news.date = req.body.currentAffairsDate;
  news.content = req.body.mainContent;
  console.log(news.date + news);
    
  news.save(function(err) {
    if(err)
    {
      res.json({msg:'Failed to add CurrentAffairs'});
      //alert("failed");
    }
    else
    {
      res.json({msg:'CurrentAffairs added successfully : from route.js file'});
      //alert("success");
    }
  });

};

