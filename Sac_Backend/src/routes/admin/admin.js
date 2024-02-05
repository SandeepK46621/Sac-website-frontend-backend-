const express = require("express");
const router= express.Router();
const {Event, Gallery, Admin , Members, News}= require("../../database/db");
const {checkAdmin,checkregisternationAdmin,headerVerify} = require("../../midlewares/midleware");
const {Jwtmaker, Jwtverify} = require("../../authentication/auth")
const event= require("./events")
const gallery= require("./gallery")
const members= require("./members")
const news= require("./news")

app.use('/events',event);
app.use('/gallery',gallery);
app.use('/members',members);
app.use('/news',news);

// registeration for new Admin
router.post("/register",checkregisternationAdmin,async(req,res)=>{
    const {username,password,name,position,email, phone}= req.body ;
    const adminobj = new Admin({
        username, password ,name ,position,email,phone
    });
    await adminobj.save();
    res.json({message:"Admin added"});
});


// Admin login 
router.post("/login",checkAdmin,(req,res)=>{
    const token= Jwtmaker({username:req.headers.username, password:req.headers.password});
    res.json({Authorization:token});
})


module.exports= router;