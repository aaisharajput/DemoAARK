import mongoose from "mongoose";

export const init= function(){
    return new Promise(async(resolve,reject)=>{
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/AARK_Global')
            return resolve("Connected database!!");
        }catch(err){
            return reject(err);
        }        
    })
}