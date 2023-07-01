import express from "express";
import { updateUser, getUser, deleteUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

/* router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user you are logged in!")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user you are logged in and you can delete your account!")
})

router.get("/checkadmin/:id",verifyUser,(req,res,next)=>{
    res.send("hello Admin you are logged in and you can delete all accounts!")
}) */


//UPDATE
router.put("/:id",verifyUser, updateUser)
//GET
router.get("/:id",verifyUser, getUser)
//DELETE
router.delete("/:id",verifyUser, deleteUser)

//GET ALL
router.get("/", verifyAdmin, getUsers)

export default router