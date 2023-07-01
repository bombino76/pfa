import express from "express";
import { createPlace, deletePlace, getPlace, getPlaces, updatePlace} from "../controllers/place.js";
import Place from "../models/Place.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createPlace);

//UPDATE
router.put("/:id", verifyAdmin,updatePlace)
//GET
router.get("/:id",verifyAdmin, getPlace)
//DELETE
router.delete("/:id", verifyAdmin, deletePlace)

//GET ALL
router.get("/", verifyAdmin, getPlaces)

export default router