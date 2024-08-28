import * as all from '../interfaces';
import { Application, Request, Response, NextFunction } from "express";
import categoriesRoute from "./categoriesRoute";
import subcategoriesRoute from "./subCategoriesRoute";
import ApiErrors from "../Utils/apiErrors";
import globalErrors from "../middleWares/globalError";
import productsRoute from './productsRoute';

const mountRoutes = (app: Application): void => {
  app.use('/api/v1/categories', categoriesRoute);
  app.use('/api/v1/subcategories', subcategoriesRoute);
  app.use('/api/v1/products', productsRoute);
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ApiErrors(`The router ${req.originalUrl} is not found`, 400))
  })
  app.use(globalErrors);
}

export default mountRoutes;