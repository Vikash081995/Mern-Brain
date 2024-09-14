import express, { Express, Request, Response, Router } from "express";

import {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} from "../controllers/userController";
import {
  authorizationMiddleware,
  authorizePermissions,
} from "../middlewares/authorization";

const router = express.Router();

router
  .route("/")
  .get(authorizationMiddleware, authorizePermissions, getAllUsers);
router.route("/showCurrent").get(showCurrentUser);
router.route("/updateUser").post(updateUser);
router.route("/updatePasswod").post(updateUserPassword);
router.route("/:id").get(getSingleUser);

export default router;
