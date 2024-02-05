const express = require("express");
const router= express.Router();
const {Event}= require("../../database/db");
const {headerVerify} = require("../../midlewares/midleware");



// adds the contents to events database
router.post("/add",headerVerify,async(req,res)=>{
    const {title,description,date}= req.body;
    const event_obj= new Event({
        title,description,date
    });
    await event_obj.save();
    res.json({message:"Added event"});
});

//delete the events 
router.delete("/delete:id",headerVerify,async(req,res)=>{
    try{
        await Event.deleteOne({_id:req.params.id});
        res.json({message:"deleted event"})
    }catch(error){
        console.error(error);
        res.status(400).json({message:"someting went wrong on delete"})
    }
});

// updating the event 
router.put("/update:id",headerVerify,async(req,res)=>{
    try{
        const updateEvent = await Event.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(updateEvent){
            res.json({message:"Event updated"}); 
        }else{
            res.json({message:"someting went wrong"}); 
        }
    }catch(error){
        console.error(error);
    }
});



module.exports=router;