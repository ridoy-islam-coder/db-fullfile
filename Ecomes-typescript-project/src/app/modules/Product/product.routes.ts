

import express from 'express';
import { ProductListByBrand, ProductListByCategory } from './product.controller';





const router = express.Router();
//BrandsID routers
router.get("/ProductListByBrand/:BrandID",ProductListByBrand)


//CategoryID routers
router.get("/ProductListByCategory/:CategoryID",ProductListByCategory)



export const  CategoryRoutes = router;