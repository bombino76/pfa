import mongoose from "mongoose";
const {Schema} = mongoose;

const CarSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    latitude:{
        type: Number,
        required:true
    },
    longitude:{
        type: Number,
        required:true
    },
    target:[{
        type: mongoose.Types.ObjectId,
        ref: "target"
      }],
    imagePaths:[{
        type: String,
        required:true
    }]

});

export default mongoose.model("Place",CarSchema)