var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

/* GET login page. */
router.get('/', function(req, res, next) {

    if (req.session.loggedUser!=null) res.render('index');

    res.render('login', {title: 'Login'});
});

router.post('/', function(req, res, next) {
    
    var mail = req.body.inputUsername;
    var pass = req.body.inputPassword;

    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
        if (err) throw err

        const db = client.db('aviones-qa')
        db.collection('users').find({ email: mail, password : pass }).toArray((err, result) => {
            if (err) throw err

            var correo = result[0]?.email;
            var nombre = result[0]?.name;
            var pwd = result[0]?.password;

            var resultado = correo===mail&&pwd===pass;
            
            req.session.loggedUser = { name: nombre, mail: correo };

            res.send( {login: resultado} );
        })
    });
    
});

module.exports = router;