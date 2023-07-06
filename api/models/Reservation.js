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

    target:{
        type: String
      },
    extra:{
         wifi :{
          type:  Boolean
        },
         babySeats :{
            type:  Boolean
          },

        extraBaggage :{
            type:  Boolean
          },



      },
      user:{
        type: String,
      },

});

export default mongoose.model("Reservation",ReservationSchema)