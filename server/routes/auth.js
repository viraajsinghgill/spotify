import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup",signup)

//SIGN IN
router.post("/signin",signin)

//Google AUTH
router.post("/google",)

export default router;
