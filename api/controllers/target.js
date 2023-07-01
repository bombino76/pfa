import Target from "../models/Target.js";

export const createTarget = async (req,res,next)=>{
    const newTarget = new Target(req.body)
    try{
        const savedTarget = await newTarget.save()
        res.status(200).json(savedTarget)

    }catch(err){
        next(err);
    }
}


export const updateTarget = async (req,res,next)=>{
    try{
        
        const updatedTarget = await Target.findByIdAndUpdate(req.params.id, { $set: req.body}
            , {new: true}
            );
        res.status(200).json(updatedTarget)

    }catch(err){
        next(err);
    }
}

export const getTarget = async (req,res,next)=>{
    try{
        const target = await Target.findById(req.params.id);
        res.status(200).json(target)

    }catch(err){
        next(err);
    }
}

export const deleteTarget = async (req,res,next)=>{
    try{
        await Target.findByIdAndDelete(req.params.id);
            
        res.status(200).json("Target has been deleted")

    }catch(err){
        next(err);
    }
}

export const getTargets = async (req,res,next)=>{
    try{
        const targets = await Target.find();
        res.status(200).json(targets)

    }catch(err){
        next(err);
    }
}

export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")

    try{
        const list = await Promise.all(cities.map(city=>{
            return Target.populate('place').countDocuments({city:place.name})
        }))
        res.status(200).json(list)

    }catch(err){
        next(err);
    }
}
