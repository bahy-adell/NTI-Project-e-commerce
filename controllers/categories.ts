import { Request,Response,NextFunction } from "express";
import categoriesModels from "../models/categoriesModels";
import { Categories } from "../interfaces/categories";
import asyncHandler from "express-async-handler";
import ApiErrors from "../Utils/apiErrors";

export const createCategory =asyncHandler(async(req:Request, res:Response,next:NextFunction) =>{
    const category:Categories =await categoriesModels.create(req.body);
   res.status(201).json({data:category})
});
export const getALLCategories =asyncHandler(async(req:Request, res:Response,next:NextFunction) =>{
    const categories =await categoriesModels.find();
   res.status(200).json({data:categories})
});
export const getCategory =asyncHandler(async(req:Request, res:Response,next:NextFunction) =>{
    const category =await categoriesModels.findById(req.params.id);
    if (!category) { return next(new ApiErrors('Category Nott Found', 404)) };
   res.status(200).json({data:category})
});
export const updatCategory = asyncHandler(async(req:Request, res:Response,next:NextFunction)=>{
    const category =await categoriesModels.findByIdAndUpdate(req.params.id , req.body ,{ new: true });
    if (!category) { return next(new ApiErrors('Category Not Found', 404)) };
    res.status(200).json({data:category})
});
export const deleteCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const category = await categoriesModels.findByIdAndDelete(req.params.id);
    if (!category) { return next(new ApiErrors('Category Not Found', 404)) };
    res.status(204).json();
  })