import { Router } from "express";
import { createSubcategory, deleteSubcategory, getALLSubcategories, getSubcategory, updateSubcategory } from "../controllers/subCategories";
const subcategoriesRoute: Router = Router();

subcategoriesRoute.route('/')
  .get(getALLSubcategories)
  .post( createSubcategory);

subcategoriesRoute.route('/:id')
  .get( getSubcategory)
  .put(updateSubcategory)
  .delete( deleteSubcategory);

export default subcategoriesRoute;