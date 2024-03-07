const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            trim: true,
        },
        lastName:{
            type:String,
            required: true,
            trim: true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        contactNumber:{
            type:Number,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        accountType:{
            type:String,
            enum:["Admin","Student"],
            required:true,
        },
        sem:{
            type:String,
            required:true,
        },
        approver:{
            type:String,
        },
        image:{
            type:String,
        }
    }
)
module.exports=mongoose.model("user",userSchema);