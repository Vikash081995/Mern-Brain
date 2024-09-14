import { body, validationResult } from "express-validator";
import { BadRequestError } from "../error/customErrors";
import { NextFunction } from "express";

const withValidationErrors = (validateValues: any) => {
  return [
    validateValues,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages: string[] = errors
          .array()
          .map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 50 })
    .withMessage("name must be at least 50 characters"),
]);
