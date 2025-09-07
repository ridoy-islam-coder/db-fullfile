

import express from 'express';
import { ProductDetailsID, ProductListByBrand, ProductListByCategory, ProductListByRemark } from './product.controller';





const router = express.Router();
//BrandsID routers
router.get("/ProductListByBrand/:BrandID",ProductListByBrand)


//CategoryID routers
router.get("/ProductListByCategory/:CategoryID",ProductListByCategory)

//RemarkID routers
router.get("/ProductListByRemark/:Remark",ProductListByRemark)

//ProductDetailsID routers
router.get("/ProductDetailsID/:Remark",ProductDetailsID)

export const  ProductRoutes = router;