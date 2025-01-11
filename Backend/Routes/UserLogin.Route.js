const express = require("express");
const mongoose = require("mongoose");

const {Usermodel} = require("../Models/User.Model");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const LoginRouter = express.Router();
LoginRouter.post("/login",async (req,res)=>
{
    console.log("we are logging you in pls wait");
    const {email,password} = req.body;
    if(email && password)
    {
        const validUser = await Usermodel.findOne({email});
        if(validUser)
        {
            if(validUser.password === password)
            {
                res.send("logged in successfully");
                console.log("logged in Successfully");
            }
            else
            {
                res.send("credentials does not match");
                console.log("Failed");
            }
        }
    }
});

module.exports={
    LoginRouter
}