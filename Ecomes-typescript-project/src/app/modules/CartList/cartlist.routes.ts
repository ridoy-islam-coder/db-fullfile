
import express from 'express';


import { auth } from '../../middleware/auth.middleware';
import { CreateCard } from './cartlist.controller';





const router = express.Router();

// Create Wish List
router.post("/CreateCard",auth, CreateCard);

// Create Wish List
router.post("/CreateCard",auth, CreateCard);






export const WishListRoutes = router;