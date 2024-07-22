import express from "express";
import {
  registerUser,
  authUser,
  resetPasswordRequest,
  resetPassword,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/reset-password-request", resetPasswordRequest);
router.post("/reset-password", resetPassword);
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
