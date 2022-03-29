var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    successRedirect : '/artists',
    failureRedirect : '/artists',
    scope: ['profile', 'email'],
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/artists',
    failureRedirect : '/artists'
  }
));
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/artists');
});

module.exports = router;
