import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,
        trim : true
    },
    email:{
        type : String,
        required: true,
        trim : true,
        unique: true,
        lowercase: true
    },
    password:{
        type : String,
        required: true,
    
    },
    domain:{
        type : String,
        trim: true
    },
    skills :[{
        type : String,
        trim : true
    }],

    files:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"File",
            required: true
        }
    ],
    mails:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mail"
    }]

},
{
    timestamps: true})
// blueprint convert to actual model and users folder create all info store
const User = mongoose.model("User", userSchema)
//db sobat always model use
export default User

