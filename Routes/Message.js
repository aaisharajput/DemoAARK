import express from "express";

const Router = express.Router();

Router.get("/",(req,res)=>{
    res.send("welcome to node js server")
})

export { Router as Message };
