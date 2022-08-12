var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('my-account', {title: 'My Account'});
});

router.post('/', function(req, res, next) {
  res.render('my-account', {title: 'My Account'});
});

module.exports = router;
