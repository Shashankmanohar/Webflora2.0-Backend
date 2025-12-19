import mongoose from 'mongoose';

const formSchema = new mongoose.Schema ({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        lowercase:true
    },
    contactNumber:{
        type:String,
    },
    message:{
        type: String,
        required: true,
    }
})

export default mongoose.model("form", formSchema)