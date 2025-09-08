

import express from 'express';
import { ProductDetailsID, ProductListByBrand, ProductListByCategory, ProductListByKeyword, ProductListByRemark } from './product.controller';





const router = express.Router();
//BrandsID routers
router.get("/ProductListByBrand/:BrandID",ProductListByBrand)


//CategoryID routers
router.get("/ProductListByCategory/:CategoryID",ProductListByCategory)

//RemarkID routers
router.get("/ProductListByRemark/:Remark",ProductListByRemark)

//ProductDetailsID routers
router.get("/ProductDetailsID/:Remark",ProductDetailsID)

//ProductDetailsID routers
router.get("/ProductListByKeyword/:keyword",ProductListByKeyword)

export const  ProductRoutes = router;