import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middleWares/validatorMiddelware";

export const createOrderValidator: RequestHandler[] = [
  check('address').notEmpty().withMessage('user address Required'),
  validatorMiddleware
]

export const getOrderValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id'),
  validatorMiddleware
]