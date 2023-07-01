import express from "express";
import { createCarType, deleteCarType, getCarType, updateCarType ,getCarTypes} from "../controllers/carType.js";
import CarType from "../models/CarType.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCarType);

//UPDATE
router.put("/:id", verifyAdmin,updateCarType)
//GET
router.get("/:id", verifyAdmin, getCarType)
//DELETE
router.delete("/:id", verifyAdmin, deleteCarType)

//GET ALL
router.get("/", verifyAdmin, getCarTypes)

export default router