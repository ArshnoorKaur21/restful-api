const mongoose = require('mongoose');
const validator=require('validator')
// here hmne studets api k nd new tsudents ko register krna

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        // max:10,
        required:true
    },
    description:{
        type:String,
        required:true,

    }
})

//now we will create new collection using model
const Student=new mongoose.model('Student',studentSchema);
module.exports=Student