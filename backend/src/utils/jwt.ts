import { Response } from "express";
const jwt = require("jsonwebtoken");
import { User } from "../models/user";

export const createJWT = ({ payload }: { payload: any }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  return token;
};

export const attachCookiesToResponse = ({
  res,
  user,
}: {
  res: Response;
  user: any;
}) => {
  const token = createJWT({ payload: user });
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};
export const isTokenValid = ({ token }: { token: any }) =>
  jwt.verify(token, process.env.JWT_SECRET);
