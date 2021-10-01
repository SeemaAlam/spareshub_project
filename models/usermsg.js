const mongoose=require("mongoose");

const valiadator=require("validator");

const userSchema=new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   
})