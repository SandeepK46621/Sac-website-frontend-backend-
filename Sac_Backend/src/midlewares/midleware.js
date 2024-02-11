const mongoose = require("mongoose");
const {Admin}=require("../database/db");
const {Jwtmaker, Jwtverify} =require("../authentication/auth")

// require username and password does not add any thing to body or headers
const checkAdmin= async(req,res,next)=>{
    try{
        const response= await Admin.findOne({username:req.headers.username,password:req.headers.password});
        if(response){
            next();
        }else{
            res.status(400).json({message:"username of password is wrong"});
        }
    }catch(error){
        console.error(error);
        res.status(400).json({message:"error in middleware check Admin"});
    }
}



// used for registeration just checking tha the new admin usename does not exist on databse
const checkregisternationAdmin= async(req,res,next)=>{

    try{
        const response= await Admin.findOne({username:req.body.username});
        console.log(req.body)
        if(response){
            res.status(400).json({message:"username already exists"});
        }else{
            next()
        }
    }catch(error){
        console.error(error);
        res.status(400).json({message:"error in middleware checkregisternationAdmin"});
    }
}


//this functiona verify the token and adds username and password to the header of req
const headerVerify= (req,res,next)=>{
    const response = Jwtverify(req.headers.authorization);
    if ('message' in response){
        res.status(400).json(response);
    }else{
        req.headers.username= response.username;
        req.headers.password= response.password;
        next();
    }
}

module.exports ={checkAdmin,checkregisternationAdmin,headerVerify};

