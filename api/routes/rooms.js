import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);

//GET ROOM
router.get("/:id", getRoom);

//GET ROOMS
router.get("/", getRooms);

//UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);

//DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);


export default router;