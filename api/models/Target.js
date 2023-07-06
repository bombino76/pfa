import { Double } from "mongodb";
import mongoose from "mongoose";
const {Schema} = mongoose;

const TargetSchema = new mongoose.Schema({
    


    distance:{
        type: Number,
        required:true
    },
    active:{
        type: Boolean,
        required:true
    },

    place:[{
        type:{
            type: mongoose.Types.ObjectId,
            ref: "Place"
          }
    }],
    source:{
        type:String,
    },
    destination:{
        type:String
    },

    price:{
        type:Number
        
    },
    img:{
        type:String
    }


},
{ timestamps: true }
);

export default mongoose.model("Target",TargetSchema)