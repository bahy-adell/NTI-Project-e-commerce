import * as all from '../interfaces';
import { Application, Request, Response, NextFunction } from "express";
import categoriesRoute from "./categoriesRoute";
import subcategoriesRoute from "./subcategoriesRoute";
import ApiErrors from "../utils/apiErrors";
import globalErrors from "../middleWares/globalError";
import productsRoute from './productsRoute';
import reviewsRoute from './reviewsRoute';
import usersRoute from './usersRoute';
import authRoute from './authRoute';
import wishlistRoute from './wishlistRoute';

const mountRoutes = (app: Application): void => {
  app.use('/api/v1/categories', categoriesRoute);
  app.use('/api/v1/subcategories', subcategoriesRoute);
  app.use('/api/v1/products', productsRoute);
  app.use('/api/v1/reviews', reviewsRoute);
  app.use('/api/v1/wishlist', wishlistRoute);
  app.use('/api/v1/users', usersRoute);
  app.use('/api/v1/auth', authRoute);
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ApiErrors(`The router ${req.originalUrl} is not found`, 400))
  })
  app.use(globalErrors);
}


export default mountRoutes;