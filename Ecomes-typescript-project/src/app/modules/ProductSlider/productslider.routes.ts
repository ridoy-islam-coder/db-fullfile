



import express from 'express';
import { ProductList } from './productslider.controller';






const router = express.Router();
//BrandsID routers
router.get("/ProductList",ProductList)





export const  CategoryRoutes = router;