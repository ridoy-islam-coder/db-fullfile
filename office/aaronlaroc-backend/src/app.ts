import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { userRoutes } from './app/modules/auth/user.routes';
import errorHandler from './app/middleware/errorHandler';
import { financialRoutes } from './app/modules/financial-Information/financial.routes';
import { medicalRoutes } from './app/modules/medical-Information/medical.routes';
import { socialRoutes } from './app/modules/social-Information/social.routes';

const app = express();


app.use(cors());
app.use(express.json({  limit: '50mb'}));
app.use(helmet());
const limiter = rateLimit({windowMs: 20 * 60 * 1000, max: 100, });
app.use(limiter);



//routes

app.use("/api/v1",userRoutes)
app.use("/api/v1",financialRoutes)
app.use("/api/v1",medicalRoutes)
app.use("/api/v1",socialRoutes)




//error handling middleware
 app.use(errorHandler) 



app.get('/', (req, res) => {
  res.send('backen server is oky !')
})

export default app;