/*API for storing SOP instructions -  Added on Nov 29, 2018  */

var mongoose = require('mongoose');
var Quotes = mongoose.model('Quotes');


module.exports.savequote = function(req, res,next) {
    
    // console.log("entered INTO SAVING QUOTE FUNCTION");

    var quote = new Quotes();
    quote.author = req.body.author;
    quote.category = req.body.category;
    quote.quotedesc = req.body.quotedesc;

      
    quote.save(function(err) {
      if(err)
      {
        res.json({msg:'Failed to add QUOTE'});
        
      }
      else
      {
        res.json({msg:'QUOTE added successfully : from quotes.js within routes/index.js file'});
        
      }
    });
  
  };

 /*END OF SAVE FUNCTION */

  module.exports.readquotes = function(req, res,next) {
    console.log('ENTERED INTO readquotes Function');
    Quotes.find(function(err,getquotes){
     
      if(err){
               
        console.log('Error');
        return;
    }
    else{
      
     
      for(var i in getquotes)
      {
        // console.log('ENTERED FOR LOOP');
        // console.log('Entire Document'+getquotes[i]);
        // console.log(i+ ':Question:  '+getquotes[i].quotedesc); //
        //console.log(i+ ': Subject: '+docs[i].subject);   //
      }

      res.writeHead(200,{'Content-Type':'application/json'}); //To Avoid CORS Errors
        res.end(JSON.stringify(getquotes));
    }
      })

  };
  /*END OF READ FUNCTION */

  module.exports.updatequotes = function(req, res,next) {
    console.log('Entered NodeJS app to update');
    let updatequote={
      quotedesc:req.body.quotedesc,
      author:req.body.author,
      category:req.body.category,
      };   
         // {      
        //   $set:{quotedesc:req.body.quotedesc,author:req.body.author,category:req.body.category}
          // If let updatequote is not used
        // }, 
    Quotes.findByIdAndUpdate(req.params.id, { $set:updatequote}, {new:true},
        function (err, updatedquote) {
        if (err) {
          res.json('Error in updating the Quote');
        }else{
          res.json(updatedquote);
        }  
      });
    };

   /*END OF UPDATE FUNCTION */




  module.exports.deletequote = function(req,res,next) {
    
    Quotes.remove({_id:req.params.id},function(err,result){
      console.log('ID is removed');
      if(err)
      {
        res.json(err);
      }
      else 
      {
        res.json(result);
      }
    });
};  