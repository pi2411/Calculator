//jshint esversion:6
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var number1 = Number(req.body.n1);
  var number2 = Number(req.body.n2);
  var result  = number1+number2;
  res.send("The result is  :"+ result);
});

app.listen(3000,function(){
  console.log("You conacted to 3000 port now!");
});
