import { Router } from "express";
const router = Router();

import {
  getSingProject,
  createProjects,
  deleteProject,
  updateProject,
  getAllProjects,
} from "../controllers/projectsController";

router.route("/").post(createProjects).get(getAllProjects);
router
  .route("/:id")
  .patch(updateProject)
  .get(getSingProject)
  .delete(deleteProject);
