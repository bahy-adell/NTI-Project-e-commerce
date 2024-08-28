import { Router } from "express";
import { createSubcategory, deleteSubcategory, filterData, getSubcategories, getSubcategory, updateSubcategory } from "../controllers/subCategories";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../Utils/validation/subcategoriesValidator";
const subcategoriesRoute: Router = Router({ mergeParams: true });

subcategoriesRoute.route('/')
  .get(filterData, getSubcategories)
  .post(createSubcategoryValidator, createSubcategory);

subcategoriesRoute.route('/:id')
  .get(getSubcategoryValidator, getSubcategory)
  .put(updateSubcategoryValidator, updateSubcategory)
  .delete(deleteSubcategoryValidator, deleteSubcategory);

export default subcategoriesRoute;