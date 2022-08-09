var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {title: 'Login'});
});

router.post('/', function(req, res, next) {
    
    var mail = req.body.inputUsername;
    var pass = req.body.inputPassword;

    console.log("Mail: "+mail+", pass: "+pass);

    MongoClient.connect('mongodb://localhost:27017/aviones-qa', (err, client) => {
        if (err) throw err

        const db = client.db('aviones-qa')
        db.collection('users').find({ email: mail, password : pass }).toArray((err, result) => {
            if (err) throw err

            var correo = result[0]?.email;
            var pwd = result[0]?.password;

            var resultado = correo===mail&&pwd===pass;
            res.send( {login: resultado} );
        })
    })
    
});

module.exports = router;