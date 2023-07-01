import mongoose from "mongoose";
const {Schema} = mongoose;

const ReservationSchema = new mongoose.Schema({

    qteCar:{
        type: Number,
        required:true
    },
    nbrPassenger:{
        type: Boolean,
        required:true
    },
    total:{
        type: Number,
        required:true
    },
    state:{
        type: String,
        enum: ['waiting', 'validated','paid','confirmed','rejected'],
        required:true
    },
    creationDate:{
        type:Date,
        required:true
    },
    target:{
        type: mongoose.Types.ObjectId,
        ref: "Target",
      },
    extra:[{
        type: mongoose.Types.ObjectId,
        ref: "Extra",
      }],
      user:{
        type: mongoose.Types.ObjectId,
        ref: "user",
      },

});

export default mongoose.model("Reservation",ReservationSchema)