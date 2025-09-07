import express from 'express';
import { BrandList } from './brands.controller';




const router = express.Router();
//Brands routers
router.get("/BrandList",BrandList)






export const  bookRoutes = router;