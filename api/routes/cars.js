import express from "express";
import { createCar, deleteCar, getCar, getCars, updateCar } from "../controllers/car.js";
import Car from "../models/Car.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCar);

//UPDATE
router.put("/:id", verifyAdmin,updateCar)
//GET
router.get("/:id", getCar)
//DELETE
router.delete("/:id", verifyAdmin, deleteCar)

//GET ALL
router.get("/", getCars)

export default router