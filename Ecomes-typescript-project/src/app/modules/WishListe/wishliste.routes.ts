

import express from 'express';

import { CreateWishList, DeleteWishList, ReadWishList } from './wishliste.controller';
import { auth } from '../../middleware/auth.middleware';





const router = express.Router();

// Create Wish List
router.post("/CreateWishList",auth, CreateWishList);
// Delete Wish List
router.post("/DeleteWishList",auth, DeleteWishList);
// Read Wish List
router.post("/ReadWishList",auth, ReadWishList);






export const WishListRoutes = router;