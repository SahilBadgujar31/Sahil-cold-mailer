import mongoose from 'mongoose'


const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected")
    }
    catch(e){
        console.log(e.message)
    }
}

export default connectDB