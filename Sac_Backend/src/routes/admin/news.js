const express = require("express");
const router= express.Router();
const {News}= require("../../database/db");
const {headerVerify} = require("../../midlewares/midleware");



// adds the contents to news database
router.post("/add",headerVerify,async(req,res)=>{
    const {title,description}= req.body;
    const news_obj= new News({
        title,description
    });
    await news_obj.save();
    res.json({message:"Added news"});
});

//delete the newss 
router.delete("/delete/:id",headerVerify,async(req,res)=>{
    try{
        await News.deleteOne({_id:req.params.id});
        res.json({message:"deleted news"})
    }catch(error){
        console.error(error);
        res.status(400).json({message:"someting went wrong on delete"})
    }
});

// updating the news 
router.put("/update/:id",headerVerify,async(req,res)=>{
    try{
        const updatenews = await News.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(updatenews){
            res.json({message:"news updated"}); 
        }else{
            res.json({message:"someting went wrong"}); 
        }
    }catch(error){
        console.error(error);
    }
});



module.exports=router;