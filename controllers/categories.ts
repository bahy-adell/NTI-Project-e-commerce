
import categoriesModel from "../models/categoriesModels";
import { Categories } from "../interfaces/categories";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";

export const createCategory = createOne<Categories>(categoriesModel)
export const getCategories = getAll<Categories>(categoriesModel, 'categories')
export const getCategory = getOne<Categories>(categoriesModel)
export const updateCategory = updateOne<Categories>(categoriesModel)
export const deleteCategory = deleteOne<Categories>(categoriesModel)
