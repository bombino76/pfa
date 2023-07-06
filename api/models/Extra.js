import mongoose from "mongoose";
const {Schema} = mongoose;

const ExtraSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    imagePaths:[{
        type: String,
        
    }],
    price:{
        type: Number,
        required:true
    },
    type:{
        type: mongoose.Types.ObjectId,
        ref: "ExtrasType",
      },

},{ timestamps: true });

export default mongoose.model("Extra",ExtraSchema)