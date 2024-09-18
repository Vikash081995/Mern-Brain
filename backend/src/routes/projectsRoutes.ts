import { Router } from "express";
const router = Router();

import {
  getSingleProject,
  createProjects,
  deleteProject,
  updateProject,
  getAllProjects,
} from "../controllers/projectsController";

router.route("/").post(createProjects).get(getAllProjects);
router
  .route("/:id")
  .patch(updateProject)
  .get(getSingleProject)
  .delete(deleteProject);
