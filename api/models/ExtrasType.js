import mongoose from "mongoose";
const {Schema} = mongoose;

const ExtrasTypeSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    }

},{ timestamps: true });

export default mongoose.model("ExtrasType",ExtrasTypeSchema)