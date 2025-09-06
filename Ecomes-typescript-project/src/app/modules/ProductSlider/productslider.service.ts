import { ProductSliderModell } from "./productslider.model";


export const ProductSliService =async () => {
  try {
    let date =await ProductSliderModell.find();
    return {status:'success', data: date};
  } catch (error) {
    return {status:'failed', data: error};
  }
}