

import express from 'express';
import { ProductReviewListByID } from './reviewproduct.controller';





const router = express.Router();


router.get("/ProductReviewListByID/:ProductID", ProductReviewListByID);

router.post("/ProductListByFilter",ProductListByFilter);





export const  ProductRoutes = router;