import { type Request, type Response, NextFunction } from "express";
import { TaskModel } from "../models/task";
import { createCustomError } from "../error/error-handler";
import { asyncWrapper } from "../middlewares/async";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../error/customErrors";
//get all tasks
export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await TaskModel.find({});
  res.status(StatusCodes.OK).json({ tasks });
});

//get single task
export const getTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOne({ _id: taskID });
    if (!task) throw new NotFoundError(`No task with id ${taskID}`);

    res.status(StatusCodes.OK).json({ task });
  }
);

//create new task
export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await TaskModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
});

//update task
export const updateTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;

    const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404));
    }

    res.status(StatusCodes.OK).json({ task });
  }
);

//delete single task
export const deleteTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404));
    }
    res.status(StatusCodes.OK).json({ task });
  }
);
