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
    creationDate:{
        type: Date,
        required:true
    },
    place:[{
        type:{
            type: mongoose.Types.ObjectId,
            ref: "Place"
          }
    }]

});

export default mongoose.model("Target",TargetSchema)