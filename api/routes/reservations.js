import express from "express";
import { createReservation, deleteReservation, getReservation, getReservations, updateReservation, getReservationsOne } from "../controllers/reservation.js";
import Reservation from "../models/Reservation.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createReservation);

//UPDATE
router.put("/:id", verifyAdmin,updateReservation)
//GET
router.get("/:id", getReservation)
//DELETE
router.delete("/:id", verifyAdmin, deleteReservation)

//GET ALL
router.get("/", getReservations)
router.get("/find/one", getReservationsOne)

export default router