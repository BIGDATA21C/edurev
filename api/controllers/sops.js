/*API for storing SOP instructions -  Added on Nov 29, 2018  */

var mongoose = require('mongoose');
var Sop = mongoose.model('Sop');


module.exports.savesop = function(req, res,next) {
    var sop = new Sop();
    console.log("entered SOP");
  
    sop.category = req.body.category;
    sop.subcategory = req.body.subcategory;
    sop.description = req.body.description;

    console.log('About to save Data in SOP collection');
      
    sop.save(function(err) {
      if(err)
      {
        res.json({msg:'Failed to add SOP'});
        
      }
      else
      {
        res.json({msg:'SOP added successfully : from sops.js within routes/index.js file'});
        
      }
    });
  
  };



  module.exports.readsop = function(req, res,next) {
   
    Sop.find(function(err,getsops){
     
      if(err){
               
        console.log('Error');
        return;
    }
    else{
      
     
      // for(var i in getsops)
      // {
      //   console.log('ENTERED FOR LOOP');
      //   console.log('Entire Document'+getsops[i]);
      //   //console.log(i+ ':Question:  '+docs[i].question); //
      //   //console.log(i+ ': Subject: '+docs[i].subject);   //
      // }

      res.writeHead(200,{'Content-Type':'application/json'}); //To Avoid CORS Errors
        res.end(JSON.stringify(getsops));
    }
      })

  };


  module.exports.delete = function(req,res,next) {
    
    Sop.remove({_id:req.params.id},function(err,result){
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