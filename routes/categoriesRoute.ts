import { Router } from "express";
import { createCategory, deleteCategory, getALLCategories, getCategory, updatCategory } from "../controllers/categories";

const categoriesRoute :Router=Router();
categoriesRoute.route(`/`)
.get(getALLCategories)
.post(createCategory);

categoriesRoute.route(`/:id`)
.get(getCategory)
.put(updatCategory)
.delete(deleteCategory);

export default categoriesRoute;