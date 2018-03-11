var express = require('express');
var router = express.Router();
const UserModel = require('../models/users');
const ProblemModel = require('../models/problems');
const displayUser = require('../controller/displayUser');
/* GET home page. */


router.get('/addproblem', function(req, res, next) {
  res.render('addproblem');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register', (req, res) => {
  var myData = new UserModel(req.body);
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
  var myDatum = new ProblemModel(req.body);
  myDatum.save()
    .then(item => {
      res.send("item saved");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    res.redirect("/")
});

router.get('/authPage',(req,res) => {
  res.render('authPage');
});


router.get('/', displayUser.showData);
module.exports = router;
