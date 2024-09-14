import { Request, Response, NextFunction } from "express";

const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Something went wrong try again later");
};

export const createCustomError = (msg: string, statusCode: number) => {
  return new CustomAPIError(msg, statusCode);
};
