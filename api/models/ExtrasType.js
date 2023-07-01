import mongoose from "mongoose";
const {Schema} = mongoose;

const ExtrasTypeSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    }

});

export default mongoose.model("ExtrasType",ExtrasTypeSchema)