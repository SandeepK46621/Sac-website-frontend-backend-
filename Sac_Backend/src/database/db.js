const mongoose = require("mongoose");


const memeberSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },imageurl:{
        type:String,
        required:true
    }
});

const gallerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    }
});

const newsSchema=  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    }
})

const adminSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },phone:{
        type:Number,
        required:true
    },username:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true,
    }
});

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },imageurl:{
        type:String,
        required:true
    }
})


const Event= mongoose.model('Event',eventSchema);
const Gallery= mongoose.model('Gallery',gallerySchema);
const Admin= mongoose.model('Admin',adminSchema);
const Members= mongoose.model('Members',memeberSchema);
const News= mongoose.model('News',newsSchema);

module.exports={Event, Gallery, Admin , Members, News}