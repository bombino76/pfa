import Reservation from "../models/Reservation.js";

export const createReservation = async (req,res,next)=>{
    const newReservation = new Reservation(req.body)
    try{
        const savedReservation = await newReservation.save()
        res.status(200).json(savedReservation)

    }catch(err){
        next(err);
    }
}


export const updateReservation = async (req,res,next)=>{
    try{
        
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body}
            , {new: true}
            );
        res.status(200).json(updatedReservation)

    }catch(err){
        next(err);
    }
}

export const getReservation = async (req,res,next)=>{
    try{
        const Reservation = await Reservation.findById(req.params.id);
        res.status(200).json(Reservation)

    }catch(err){
        next(err);
    }
}

export const deleteReservation = async (req,res,next)=>{
    try{
        await Reservation.findByIdAndDelete(req.params.id);
            
        res.status(200).json("Reservation has been deleted")

    }catch(err){
        next(err);
    }
}

export const getReservations = async (req,res,next)=>{
    try{
        const Reservations = await Reservation.find(req.query);
        res.status(200).json(Reservations)

    }catch(err){
        next(err);
    }
}

export const getReservationsOne = async (req,res,next)=>{
    try{
        const Reservations = await Reservation.findOne(req.query);
        res.status(200).json(Reservations)

    }catch(err){
        next(err);
    }
}

