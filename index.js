const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+'/bmiCalculator.html');
} );

app.post("/",function(req,res){
    var num1=req.body.weight;
    var num2=req.body.height;
    var ans=num1/(num2*num2);
    
res.send("Your BMI is :" +ans);
});
app.listen(3001,function(){
    console.log("Server is up and running");
});