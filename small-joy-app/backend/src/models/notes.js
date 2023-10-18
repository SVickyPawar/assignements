const express = require('express');
const mongoose = require('mongoose');

const notesSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    note:{
        type:String,
        required:true,
        trim:true,
    }
})

const Notes = new mongoose.model("Notes",notesSchema);

module.exports =Notes;