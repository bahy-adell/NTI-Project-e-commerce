import { Schema, model } from "mongoose";
import { SubCategories } from "../interfaces/subCategories";


const subCategoriesSchema: Schema = new Schema<SubCategories>({
  name: { type: String, required: true, trim: true, unique: true },
  category: { type: Schema.Types.ObjectId, required: true }
}, { timestamps: true });

export default model<SubCategories>('subCategories', subCategoriesSchema)