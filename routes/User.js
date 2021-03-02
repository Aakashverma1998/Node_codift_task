    const express = require("express")
const router = express.Router()
const schema_details = require("../model/userSchema")

//create class...
router.post("/post", async(req,res)=>{
    try{
        const post_data = new schema_details(req.body)
        const all_data = await post_data.save()
        res.status(201).json(all_data)
    }catch(err){
        console.log(err);
        res.json(err)
    }
})

//get all_classes....
router.get("/all_classes/get", async(req,res)=>{
    try{
        const all_classes = await schema_details.find()
        res.send(all_classes)

    }catch(err){
        console.log(err);
        res.json(err)
    }
})

//get data by title...
router.get("/get/:title", async(req,res)=>{
    try{
        const title = await schema_details.find({title:req.params.title})
        res.json(title)
    }catch(err){
        console.log(err);
        res.json(err)
    }
})

//get data by type....
router.get("/get1/:type", async(req,res)=>{
    try{
        const type = await schema_details.find({type:req.params.type})
        res.json(type)
    }catch(err){
        console.log(err);
        res.json(err)
    }
})

//get data by date...
router.get("/start_date", async(req,res)=>{
    try{
        const start_date = await schema_details.find({start_date:req.body.start_date})
        res.send(start_date)
    }catch(err){
        console.log(err);
        res.json(err)
    }
})

module.exports = router