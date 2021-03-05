const express = require('express');
const bodyParser = require('body-parser');
const jokes = require("everyday-fun");


const app = express();


app.get("/",function(req,res){
    res.send("./index.html");
})