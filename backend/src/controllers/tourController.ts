import { TourModel } from "../models/tour";
import { NextFunction, Request, Response } from "express";
import { asyncWrapper } from "../middlewares/async";

export const createTour = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const newTour = await TourModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: { tour: newTour },
    });
  }
);
