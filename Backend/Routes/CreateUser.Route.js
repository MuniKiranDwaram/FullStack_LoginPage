const express = require("express");
const mongoose = require("mongoose");
const{Usermodel} = require("../Models/User.Model");


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

const CreateUserRouter = express.Router();
CreateUserRouter.post("/createUser",async (req,res)=>
{
    console.log("user creation has started");
    const {password,email} = req.body;
    if(!password || !email)
    {
        res.send("Mentioned fields are required to sign you in");
    }
    try
    {
        console.log("user creation started")
        const existingUser = await Usermodel.findOne({email});
        console.log(existingUser);
        if(existingUser)
        {
            res.send("user already exists");
            console.log("user already exists");
        }
        else
        {
            const newUser = new Usermodel(req.body);
            console.log(newUser);
            await newUser.save();
            res.send("new User created");
            console.log("user created successfully");
        }
    }
    catch(err)
    {
        res.send("error" + err);
    }
});

module.exports ={
    CreateUserRouter,
}