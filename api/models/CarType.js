import mongoose from "mongoose";
const {Schema} = mongoose;

const CarTypeSchema = new mongoose.Schema({

    luxe:{
        type: Boolean,
        required:true,
        default: false
    }
});
export default mongoose.model("CarType",CarTypeSchema)