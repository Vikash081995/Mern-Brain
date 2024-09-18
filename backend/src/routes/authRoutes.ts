import { Router } from "express";
import { Login, Signup, Logout } from "../controllers/authController";

const router = Router();

router.post("/login", Login);
router.get("/login", Logout);
router.post("/signup", Signup);

module.exports = router;
