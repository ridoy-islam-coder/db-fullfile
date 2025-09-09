

import express from 'express';

import { CreateWishList } from './wishliste.controller';
import { auth } from '../../middleware/auth.middleware';





const router = express.Router();


router.post("/CreateWishList",auth, CreateWishList);






export const WishListRoutes = router;