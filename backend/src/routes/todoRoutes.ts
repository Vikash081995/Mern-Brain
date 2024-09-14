import express, { Express, Request, Response, Router } from "express";

import {
  getAllTodos,
  AddTodo,
  updateSingleTodo,
  deleteTodo,
} from "../controllers/todoController";

const router = Router();

router.get("/", getAllTodos);

router.post("/", AddTodo);

router.put("/todo/:todoId", updateSingleTodo);
router.delete("/todo/:todoId", deleteTodo);

export default router;
