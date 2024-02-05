const express = require("express");
const app = express();
const adminRoute = require("./src/routes/admin/admin.js");
const {Event, Gallery,  Members, News}= require("./src/database/db.js");
app.use(cors());
app.use("/admin", adminRoute);
app.use(express.json());
mongoose.connect("mongodb+srv://sandeep46621:w5tqFtSvAoG8T5v2@cluster0.dmocucf.mongodb.net/Sac",{  useNewUrlParser: false,useUnifiedTopology: true,})


app.get("/gallery",async(req,res)=>{ 
    try{
        const response= await Gallery.find({});
        res.json(response);
    }catch(error){
        console.error(error);
        res.status({message:"someting went wrong on get"});
    }
})

app.get("/event",async(req,res)=>{ 
    try{
        const response= await Event.find({});
        res.json(response);
    }catch(error){
        console.error(error);
        res.status({message:"someting went wrong on get"});
    }
})

app.get("/memebers",async(req,res)=>{ 
    try{
        const response= await Members.find({});
        res.json(response);
    }catch(error){
        console.error(error);
        res.status({message:"someting went wrong on get"});
    }
})

app.get("/news",async(req,res)=>{ 
    try{
        const response= await News.find({});
        res.json(response);
    }catch(error){
        console.error(error);
        res.status({message:"someting went wrong on get"});
    }
})

app.listen(3000,()=>{
    console.log("Server runnning on port 3000");
})