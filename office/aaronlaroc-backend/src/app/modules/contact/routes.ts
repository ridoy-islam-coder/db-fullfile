import express from 'express';
import { auth, isAdmin } from '../../middleware/auth.middleware';
import { creatcontact, getallContact } from './controller';


const router = express.Router();

// public routes
router.post("/creatcontact",creatcontact)

//pravite routes admin routes
router.get("/getallContact",auth,isAdmin,getallContact)




export const  bookRoutes = router;