const express = require("express");
const router= express.Router();
const {Members}= require("../../database/db");
const {headerVerify} = require("../../midlewares/midleware");



// adds the contents to Memberss database
router.post("/add",headerVerify,async(req,res)=>{
    console.log("add members Hiting ")
    const {name,position,imageurl}= req.body;
    console.log(name,position,imageurl);
    const Members_obj= new Members({
        name,position,imageurl
    });
    await Members_obj.save();
    res.json({message:"Added Members"});
});

//delete the Members
router.delete("/delete/:id",headerVerify,async(req,res)=>{
    try{
        await Members.deleteOne({_id:req.params.id});
        res.json({message:"deleted Members"})
    }catch(error){
        console.error(error);
        res.status(400).json({message:"someting went wrong on delete"})
    }
});

// updating the Members 
router.put("/update/:id",headerVerify,async(req,res)=>{
    try{
        const updateMembers = await Members.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(updateMembers){
            res.json({message:"Members updated"}); 
        }else{
            res.json({message:"someting went wrong"}); 
        }
    }catch(error){
        console.error(error);
    }
});



module.exports=router;