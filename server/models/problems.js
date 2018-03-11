const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var problemSchema = new Schema({

    name : { type : String , required : true},
    title : { type : String , required : true},
    description : { type : String , required : true},
    high : {type : Number, default : 0},
    mod : {type : Number, default : 0},
    low : {type : Number, default : 0}
});

var problemModel = mongoose.model('problem', problemSchema);
module.exports = problemModel;
