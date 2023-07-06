import express from "express";
import { countByCity, createTarget, deleteTarget, getTarget, getTargets, updateTarget,getFeautred} from "../controllers/target.js";
import Target from "../models/Target.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTarget);

//UPDATE
router.put("/:id", verifyAdmin,updateTarget)
//GET
router.get("/find/:id", getTarget)
//DELETE
router.delete("/:id", verifyAdmin, deleteTarget)

//GET ALL
router.get("/", getTargets)
router.get("/getFeautred",getFeautred)
router.get("/countByCity",countByCity)


export default router