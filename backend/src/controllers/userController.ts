import { Request, Response } from "express";
import { User } from "../models/user";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../error/customErrors.js";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({ role: "user" }).select("-password");

  res.status(StatusCodes.OK).json({ users });
};
export const getSingleUser = async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new NotFoundError(`No user found with id:${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ user });
};
export const showCurrentUser = async (req: Request, res: Response) => {
  res.send("showCurrentUser");
};
export const updateUser = async (req: Request, res: Response) => {
  res.send("updateUsers");
};
export const updateUserPassword = async (req: Request, res: Response) => {
  res.send("updateUserPassword");
};
