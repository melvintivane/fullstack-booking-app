import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

export default router;
