//import mongoose
//add schema 's' of mongoose.Schema is uppercase
//add collection , collection name will automatically plural in db
//add model ..this is used to add data in db
//export model

const mongoose = require('mongoose');  //import mongoose

const schema = mongoose.Schema({ //ADDING SCHEMA 
    Name : String,
    Age : Number,
    Place : String,
    Phone : Number

})

const userModel = mongoose.model("user" , schema); //collection will be "users" in db
module.exports = userModel;