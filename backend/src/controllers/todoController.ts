import { type Request, type Response, NextFunction } from "express";
import { Todo } from "../types/todoTypes";

let todos: Todo[] = [];
export const getAllTodos = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ todos: todos });
};

export const AddTodo = (req: Request, res: Response, next: NextFunction) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "todo added", todo: newTodo, todos: todos });
};

export const updateSingleTodo = (req: Request, res: Response, next: NextFunction) => {
  const tId = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "Updated todo", todos: todos });
  }
  res.status(404).send(`Couldn't find any todo with ${tId}`);
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
  res.status(200).json({ message: "todo deleted", todos: todos });
};
