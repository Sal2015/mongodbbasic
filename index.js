// 1. import express
// 2. initialize express
// 3. api
// 4 . allocate port to variable created during initialization


var express = require('express') //1



// const { connection } = require('mongoose');  //from connection.js
require('./connection');

const user = require('./model/user') //  from ./model/user.js

var app = express(); //2

app.use(express.json()); //add middleware
//3
// app.get('/',  (req,res) => {    
                                
//     res.send("hello");          
// })                              
app.get('/login' , (req,res) =>{

    res.send("Login Successful !")

})




//add data to db
app.post('/' , (req,res) =>{
    try{
        console.log(req.body)
        user(req.body).save()     //saves any data that arrives in the user model
        res.send({message: " data added successfully"})
    }
    catch(error){
        console.log(error)

    }
})

//view all users
app.get('/view' , async(req , res) =>{

   try{
    const data = await user.find();
    res.send(data);

   }
   catch(error){
        console.log(error);
   }
})

//delete a user
app.delete('/remove/:id' , async(req,res)=>{
try{
    console.log(req.params.id)
    await user.findByIdAndDelete(req.params.id);
    res.send({message: " data deleted"});

}
catch(error){
    console.log(error);
}

})


//update a user
app.put('/edit/:id' , async(req,res)=> {

    try{
        var data = await user.findByIdAndUpdate(req.params.id , req.body);
        res.send({message : "updated successfully",data});
    }
    catch(error){
        console.log(error)
    }
})



//4

app.listen(3000 , () => {
    console.log("port is up and running! ")
})