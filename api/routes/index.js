var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlNews = require('../controllers/news');
var ctrlAuth = require('../controllers/authentication');
var contactUs = require('../controllers/contactUs');





// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/news', ctrlNews.newsRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/contact-us', contactUs.contactMail);
router.post('/news', ctrlNews.newsRead);



/*API for storing SOP instructions Added on Nov 29, 2018  */
var sopdetails = require('../controllers/sops');
router.post('/sop', sopdetails.savesop);
router.get('/sops', sopdetails.readsop);
router.delete('/deletesop/:id',sopdetails.delete);
/*API for storing SOP instructions Added on Nov 29, 2018  */



module.exports = router;
