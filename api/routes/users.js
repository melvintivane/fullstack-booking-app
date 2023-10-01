import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.status(200).send("Hello User")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.status(200).send("Hello User You're logged in and can delete your account.")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.status(200).send("Hello Admin You're logged in and can delete all accounts.")
// });

//GET USER
router.get("/:id", verifyUser, getUser);

//GET ALL USERS
router.get("/", verifyAdmin, getUsers);

//UPDATE USER
router.put("/:id", verifyUser, updateUser);

//DELETE USER
router.delete("/:id", verifyUser, deleteUser);


export default router;
