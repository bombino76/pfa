import Place from "../models/Place.js";

export const createPlace = async (req,res,next)=>{
    const newplace = new Place(req.body)
    try{
        const savedplace = await newplace.save()
        res.status(200).json(savedplace)

    }catch(err){
        next(err);
    }
}


export const updatePlace = async (req,res,next)=>{
    try{
        
        const updatedplace = await Place.findByIdAndUpdate(req.params.id, { $set: req.body}
            , {new: true}
            );
        res.status(200).json(updatedplace)

    }catch(err){
        next(err);
    }
}

export const getPlace = async (req,res,next)=>{
    try{
        const place = await Place.findById(req.params.id);
        res.status(200).json(place)

    }catch(err){
        next(err);
    }
}

export const deletePlace = async (req,res,next)=>{
    try{
        await Place.findByIdAndDelete(req.params.id);
            
        res.status(200).json("place has been deleted")

    }catch(err){
        next(err);
    }
}

export const getPlaces = async (req,res,next)=>{
    try{
        const places = await Place.find();
        res.status(200).json(places)

    }catch(err){
        next(err);
    }
}