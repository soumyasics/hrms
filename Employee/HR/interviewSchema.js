const mongoose= require("mongoose");

const Schema=mongoose.Schema({
jId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'jobs'
  },
   aid:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'applicants'
   },
   
    date:{
        type:Date
        
    },time:
    {
        type:String,
        required:true
    },
    type:
    {
        type:String,
        required:true
    },venue:
    {
        type:String,
        required:true
    }
   ,comments:
   {
       type:String,
       required:true
   }
  
   

});
module.exports=mongoose.model('interviews',Schema)