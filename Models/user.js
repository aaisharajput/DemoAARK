import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
    } ,
    email:{
        type:String,
        require:true,
        unique:true
    } ,
    pswd:{
        type:String,
        require:true
    } ,
    verified:{
        type:Number,
        require:true,
        default:0
    } ,
    mail_token:{
        type:Number,
    } 
});

export const UserModel=mongoose.model("User",userSchema);
