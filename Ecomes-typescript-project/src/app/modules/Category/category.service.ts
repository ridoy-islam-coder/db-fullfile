import { CategoryModel } from "./category.model";


export const CategoryService =async () => {
  try {
    let date =await CategoryModel.find();
    return {status:'success', data: date};
  } catch (error) {
    return {status:'failed', data: error};
  }
}