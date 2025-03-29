import express from "express";
import { register } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", register);
router.get("/get");

export default router;
