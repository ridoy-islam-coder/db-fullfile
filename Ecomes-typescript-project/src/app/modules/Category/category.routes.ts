

import express from 'express';
import { CategoryList } from './category.controller';





const router = express.Router();
//Brands routers
router.get("/CategoryList",CategoryList)






export const  CategoryRoutes = router;