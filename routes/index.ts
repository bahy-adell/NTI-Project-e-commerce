import { Application, Request, Response, NextFunction} from "express";
import categoriesRoute from "./categoriesRoute";
import subcategoriesRoute from "./subCategoriesRoute";
import ApiErrors from "../Utils/apiErrors";
import globalError from "../middleWares/globalError";



const AllRoutes = (app: Application): void => {
    app.use(`/api/v1/categories`,categoriesRoute);
    app.use(`/api/v1/subCategories`,subcategoriesRoute);
    app.all('*',(req: Request, res:Response,next:NextFunction)=>{
        next(new ApiErrors(`the route${req.originalUrl} is not`,400))
    })
   app.use(globalError);
}

export default AllRoutes;