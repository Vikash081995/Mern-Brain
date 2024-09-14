import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError } from "../error/customErrors";
import { isTokenValid } from "../utils/jwt";
const jwt = require("jsonwebtoken");

export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new UnauthenticatedError("no token ");
  }
  try {
    const { username, userId, role } = isTokenValid({ token });
    (req as any).user = { username, userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Autherization failed!!!");
  }
};



export const authorizePermissions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};