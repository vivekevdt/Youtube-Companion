
const mongoose = require('mongoose');

const dbConnect=()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/cactro")
        .then(()=>{
            console.log("Connected to MongoDB")
        })
        .catch((err)=>{
            console.log("Error connecting to MongoDB", err)
            })
    }
    catch{
        console.log("Error connecting to MongoDB")
    }

}

module.exports=dbConnect

