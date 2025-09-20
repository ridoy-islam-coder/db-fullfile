import express from 'express';
import { bookupdate, creatbook, deletepost, getallbook, getbyid } from './controller';
import { auth, isAdmin } from '../../middleware/auth.middleware';


const router = express.Router();
//public routes
router.get("/getallbook",getallbook)
router.get("/getbyid/:id", auth, getbyid)


//private routes admin routes
router.post("/creatbook",auth,isAdmin,creatbook)
router.put("/bookupdate/:id",auth,isAdmin,bookupdate)
router.delete("/delete/:id",auth,isAdmin,deletepost)


export const  bookRoutes = router;