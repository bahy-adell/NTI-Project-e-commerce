import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import subCategoriesModel from "../models/subCategoriesModels";
import { SubCategories } from "../interfaces/subCategories";
import ApiErrors from "../Utils/apiErrors";
// import ApiErrors from "../Utils/apiErrors";


export const createSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory: SubCategories = await subCategoriesModel.create(req.body);
  res.status(201).json({ data: subcategory });
});

export const getALLSubcategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const categories = await subCategoriesModel.find();
  res.status(200).json({ data: categories });
})

export const getSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory = await subCategoriesModel.findById(req.params.id);
  if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
  res.status(200).json({ data: subcategory })
});

export const updateSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory = await subCategoriesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
  res.status(200).json({ data: subcategory });
})

export const deleteSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory = await subCategoriesModel.findByIdAndDelete(req.params.id);
  if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
  res.status(204).json();
})