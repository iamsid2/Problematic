const mongoose = require('mongoose');
const UserModel = require('../models/users');

const userAuthenticate = (req,res) => {
  if( req.body.email == "admin@mail.com" && req.body.password == "admin" ) {
    req.session.user = "admin";
    console.log("Session : ", req.session);
    res.redirect('/authPage');
  } else {

  UserModel.findOne({"email": req.body.email.toLowerCase().trim()} , (err,doc) => {
    console.log(doc);
    if(err) throw err;
    if(doc){
      if(req.body.password===doc.password){
        var details = {
        "name" : doc.name,
        "email" : doc.email,
        "designation" : doc.designation,
        "contact" : doc.contact,
      };
      req.session.user = details;
      res.redirect('/');
    }
    else res.json({"msg" : "Invalid Password"});
  }
  else res.json({"msg" : "Incorrect Emailid"});
  })
}
}
module.exports = {"userAuthenticate" : userAuthenticate};
