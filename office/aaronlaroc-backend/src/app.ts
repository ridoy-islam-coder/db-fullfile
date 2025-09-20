import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { bookRoutes } from './app/modules/book/routes';
import { userRoutes } from './app/modules/auth/user.routes';
import errorHandler from './app/middleware/errorHandler';

const app = express();


app.use(cors());
app.use(express.json({  limit: '50mb'}));
app.use(helmet());
const limiter = rateLimit({windowMs: 20 * 60 * 1000, max: 100, });
app.use(limiter);



//routes
app.use("/api/v1",bookRoutes)
app.use("/api/v1",userRoutes)




//error handling middleware
 app.use(errorHandler) 



app.get('/', (req, res) => {
  res.send('backen server is oky !')
})

export default app;