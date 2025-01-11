const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
require("dotenv").config();

const {connection} = require("./Database/DB");
const { LoginRouter } = require("./Routes/UserLogin.Route");
const { CreateUserRouter } = require("./Routes/CreateUser.Route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/login",LoginRouter);
app.use("/register",CreateUserRouter);

app.get("/", (req,res)=>
{
    res.send("HomePage");
})

app.listen("4070",async ()=>
{
    await connection;
    try{
        console.log("Connected Successfully");
        console.log("Connected to DB Successfully");        
    }
    catch(err)
    {
        console.log(err);
    }
});