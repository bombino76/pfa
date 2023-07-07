import User from "../models/User.js"
import createError from "../utils/error.js"
import bcrypt from "bcryptjs"
import  jwt from "jsonwebtoken"



export const register = async (req,res,next)=>{
    const userExisits = await User.findById(req.params.id);
    if(userExisits) return next(createError(404,"User already exists"))
try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);


    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        username:req.body.username,
        email:req.body.email,
        password:hash,

    })

    await newUser.save()
    res.status(200).send("User has been created")

    
} catch (err) {
    next(err)
}
}

export const login = async (req,res,next)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"User not found"))
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createError(404,"Wrong Password"));
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT);
        const { password, isAdmin, ...otherDetails } = user._doc;
        res
        .cookie("access_token",token,{
            httpOnly :true,
        })
        .status(200).json({ ...otherDetails});
    } catch (err) {
        next(err)
    }
    
    
    
    
    }