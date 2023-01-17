import express from "express";
import { getAllProducts } from "../controllers/Controller.js";

const router = express.Router();

// get all products
router.get("/", getAllProducts);

export default router
