const probModel = require('../models/problems');

const priorityUp = (req,res) => {
  probModel.findOneAndUpdate({name: req.body.name}, {$set:{high:high+1}}, function(err, doc) {
      if(err) throw err;
      console.log(doc);
      res.redirect("/");
  })
}
module.exports = {"priorityUp" : priorityUp};