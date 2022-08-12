var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  req.session.destroy();

  res.send( {logout: true} );

});

router.post('/', function(req, res, next) {

  var respuesta = false;

  var log = req.body.logout;

  respuesta = log.logout;

  req.session.destroy();

  res.send( {logout: respuesta} );

});

module.exports = router;