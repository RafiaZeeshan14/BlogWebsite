const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    // takes id by default
    username: { type: String, required: true },
    title: { type: String,  },
    desc: String,                   //if single defined field then can be define like this without object
    // isEdit: { type: Boolean, default: 1 },
})


const Blog=new mongoose.model("Blog " , Schema) // it will create database of name project 
module.exports = Blog