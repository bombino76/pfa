import mongoose from "mongoose";
const {Schema} = mongoose;

const CarSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    nbrPlaces:{
        type: Number,
        required:true
    },
    type:{
        type: mongoose.Types.ObjectId,
        ref: "CarType",
      },
    imagePaths:{
        type: String,
        required:true
    },
    price:{
        type : Number
    },
    rating:{
        type: Number,
        default : 7
    },
    Modele:{
        type: Number
    },
    luxe:{
        type: Boolean,
        default: false
    }

},{ timestamps: true });

export default mongoose.model("Car",CarSchema)