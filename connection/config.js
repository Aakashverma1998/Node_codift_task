const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/students",{ useUnifiedTopology: true , useNewUrlParser: true ,useFindAndModify:false} )
.then( ()=>console.log("connection is sucessfull......."))
.catch( (err)=>console.log(err))

module.exports = mongoose