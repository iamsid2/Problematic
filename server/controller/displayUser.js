var mongoose = require('mongoose');
var problems = require('../models/problems');


var showData = function(req,res) {

    var query = problems.find();
    query.select('title description name');

    query.exec(function(err, problem){
      if(err) throw err;
      console.log(problem);
      res.render("index" , {"problems":problem});
    });
  }


module.exports = { "showData": showData };
