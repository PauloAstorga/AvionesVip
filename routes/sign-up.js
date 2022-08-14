var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.loggedUser!=null) res.render('index');
  res.render('signup', {title: 'Sign-Up'});
});

router.post('/', function(req, res, next) {
    
  var mail = req.body.inputUsername;
  var pass = req.body.inputPassword;
  var namo = req.body.inputName;
  var surname = req.body.inputSurname;
  var phono = req.body.inputPhone;


  MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err

      const db = client.db('aviones-qa')
      var ins = { name: namo , email: mail, password: pass, lname: surname, phone: phono };
      db.collection('users').insertOne(ins, function(err, res) {
          if (err) throw err
          console.log("Usuario registrado con exito");
          db.close();
      })
  });
  
});
module.exports = router;
