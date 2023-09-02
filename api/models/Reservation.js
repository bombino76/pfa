import mongoose from "mongoose";
const {Schema} = mongoose;

const ReservationSchema = new mongoose.Schema({

    Car:{
        type: String,
        required:true
    },
    nbrPassenger:{
        type: Number,
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

    source:{
        type: String
      },
    destination:{
        type: String
      },

      
    firstName:{
      type: String
    },
    email:{
      type: String
    },
    phone:{
      type: String
    },
    extra:{
        type:String
      },
      user:{
        type: String,
      },

});

export default mongoose.model("Reservation",ReservationSchema)