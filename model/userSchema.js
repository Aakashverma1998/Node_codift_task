const mongoose=require("mongoose")

const Userschama =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:4,
        maxlength:80

    },
    description:{
        type:String,
        required:true,
        minlength:15,
        maxlength:600
    },
    maxNumberOfStudents:{
        type:Number,
        required:true,
        min:1,
        max:50
    },
    type:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        default: new Date().getTime()

    },
    end_date:{
        type:Date,
        default:new Date().getTime()
    }
})

var data = mongoose.model("data",Userschama)
module.exports = data