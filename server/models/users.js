const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = new Schema({

    name : { type : String , required : true},
    email : { type : String , required : true},
    contact : { type : String , required : true},
    designation : { type : String , required : true},
    password : { type : String , required : true}

});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;
