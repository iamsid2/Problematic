var express = require('express');
var router = require('router');
const UsrModel = require('../models/users');
const PrblmModel = require('../models/problems');
const displayUser = require('../controller/displayUser');
var login = require('../controller/login');
/*Get Home Page*/

router.get('/addproblem', function(req, res, next){
  res.render('addproblem');
});

router.get('/login', function(req,res,next){
  res.render('login');
});


router.get('/register', function(req,res,next){
  res.render('register');
});

router.get('/', displayUser.showData);

router.post('/register', (req, res) => {
  var myData = new UsrModel(req.body);
  myData.save()
    .then(item => {
      res.send("item saved");
    })
    .catch(err => {
   res.status(400).send("unable to save to database");
 });
 res.redirect("/login")
});

router.post('/addproblem', (req, res) => {
  var myDatum = new PrblmModel(req.body);
  myDatum.save()
    .then(item => {
      res.send("item saved");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    res.redirect("/");
});
router.post("/login", login.userAuthenticate);


module.export = router;
