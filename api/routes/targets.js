import express from "express";
import { createTarget, deleteTarget, getTarget, getTargets, updateTarget, countByCity} from "../controllers/target.js";
import Target from "../models/Target.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTarget);

//UPDATE
router.put("/:id", verifyAdmin,updateTarget)
//GET
router.get("/find/:id",verifyAdmin, getTarget)
//DELETE
router.delete("/:id", verifyAdmin, deleteTarget)

//GET ALL
router.get("/", verifyAdmin, getTargets)
router.get("/countByCity",countByCity)
export default router