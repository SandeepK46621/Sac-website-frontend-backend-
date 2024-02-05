const express = require("express");
const router= express.Router();
const {Gallery}= require("../../database/db");
const {headerVerify} = require("../../midlewares/midleware");



// adds the contents to gallerys database
router.post("/add",headerVerify,async(req,res)=>{
    const {name,imageurl}= req.body;
    const gallery_obj= new Gallery({
        name,imageurl
    });
    await gallery_obj.save();
    res.json({message:"Added image"});
});

//delete the gallerys 
router.delete("/delete:id",headerVerify,async(req,res)=>{
    try{
        await Gallery.deleteOne({_id:req.params.id});
        res.json({message:"deleted image"})
    }catch(error){
        console.error(error);
        res.status(400).json({message:"someting went wrong on delete"})
    }
});

// updating the gallery 
router.put("/update:id",headerVerify,async(req,res)=>{
    try{
        const updategallery = await Gallery.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(updategallery){
            res.json({message:"gallery updated"}); 
        }else{
            res.json({message:"someting went wrong"}); 
        }
    }catch(error){
        console.error(error);
    }
});



module.exports=router;