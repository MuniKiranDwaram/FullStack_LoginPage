const express = require("express");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    "name":{type:String,require:true},
    "email":{type:String,require:true},
    "password":{type:String,require:true},
    "gender":{type:String,require:false}
});

const Usermodel = mongoose.model("User",UserSchema);

module.exports={
    Usermodel,
}