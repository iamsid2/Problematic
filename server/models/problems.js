const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var problemSchema = new Schema({

    name : { type : String , required : true},
    title : { type : String , required : true},
    description : { type : String , required : true}
});

var problemModel = mongoose.model('problem', problemSchema);
module.exports = problemModel;
