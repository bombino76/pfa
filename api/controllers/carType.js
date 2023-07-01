import CarType from "../models/CarType.js";

export const createCarType = async (req,res,next)=>{
    const newCarType = new CarType(req.body)
    try{
        const savedCarType = await newCarType.save()
        res.status(200).json(savedCarType)

    }catch(err){
        next(err);
    }
}


export const updateCarType = async (req,res,next)=>{
    try{
        
        const updatedCarType = await CarType.findByIdAndUpdate(req.params.id, { $set: req.body}
            , {new: true}
            );
        res.status(200).json(updatedCarType)

    }catch(err){
        next(err);
    }
}

export const getCarType = async (req,res,next)=>{
    try{
        const carType = await CarType.findById(req.params.id);
        res.status(200).json(carType)

    }catch(err){
        next(err);
    }
}

export const deleteCarType = async (req,res,next)=>{
    try{
        await CarType.findByIdAndDelete(req.params.id);
            
        res.status(200).json("CarType has been deleted")

    }catch(err){
        next(err);
    }
}

export const getCarTypes = async (req,res,next)=>{
    try{
        const CarTypes = await CarType.find();
        res.status(200).json(CarTypes)

    }catch(err){
        next(err);
    }
}