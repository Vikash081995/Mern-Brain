import { asyncWrapper } from "../middlewares/async";
import { User } from "../models/user";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../error/customErrors";
import { attachCookiesToResponse, createJWT } from "../utils/jwt";
const { CustomAPIError } = require("../errors");

export const Signup = asyncWrapper(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    throw new BadRequestError("Please provide name, email,password");
  }
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }
  const user = await User.create({ ...req.body });
  const tokenUser = { name: user.username, userId: user._id, role: user.role };

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: { user: tokenUser },
  });
});

export const Login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  // const isPasswordCorrect = await User.comparePassword(password);

  // if (!isPasswordCorrect) {
  //   throw new CustomAPIError("please provide correct password ");
  // }

  res.send("login");
});

export const Logout = asyncWrapper(async (req, res, next) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).send({ msg: "user loged out successfully" });
});
