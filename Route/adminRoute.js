import express from "express";
import { createAdmin, loginAdmin } from "../Controller/adminController.js";

const router = express.Router();

// CREATE ADMIN (one-time setup, ENV protected)
router.post(
  "/admin/create",
  (req, res, next) => {
    if (process.env.ALLOW_ADMIN_CREATE !== "true") {
      return res.status(403).json({ message: "Admin creation disabled" });
    }
    next();
  },
  createAdmin
);

// ADMIN LOGIN (public)
router.post("/admin/login", loginAdmin);

export default router;
