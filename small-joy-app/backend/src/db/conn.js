const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/notes").then(()=>{
    console.log("Connection successful");
}).catch(()=>{
    console.log("No connection available");
})