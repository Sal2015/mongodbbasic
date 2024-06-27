

const mongoose = require("mongoose")  //import 

mongoose.connect("mongodb+srv://sal2003naz:salnaz@cluster0.wcuv6bn.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0")    //paste url from mongodb->database->collections->connect
    .then( ()=>{
        console.log("connected to db");
    })                             //check working
    .catch( (error) => {
        console.log(error);
    })         
