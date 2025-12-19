import express from "express";
import {
    Formfillup,
    getAllForm,
    deleteForm
} from "../Controller/formController.js";
import authMiddleware from "../Auth/auth.js";

const router = express.Router();

// PUBLIC (website contact form)
router.post("/form", Formfillup);

// ADMIN ONLY
router.get("/form", authMiddleware("admin"), getAllForm);
router.delete("/form/:id", authMiddleware("admin"), deleteForm);

export default router;
