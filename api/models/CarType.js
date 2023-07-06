import mongoose from "mongoose";
const {Schema} = mongoose;

const CarTypeSchema = new mongoose.Schema({

    luxe:{
        type: Boolean,
        required:true,
        default: false
    }
},{ timestamps: true });
export default mongoose.model("CarType",CarTypeSchema)