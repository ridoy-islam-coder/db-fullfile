import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { bookRoutes } from './app/modules/book/routes';
import { userRoutes } from './app/modules/auth/user.routes';
import errorHandler from './app/middleware/errorHandler';
import { config } from './app/config';
import { BrandsRoutes } from './app/modules/Brands/brands.routes';
import { CategoryRoutes } from './app/modules/Category/category.routes';
import { ProductRoutes } from './app/modules/Product/product.routes';

const app = express();


//app  use default middleware
app.use(cors());
app.use(express.json({  limit: '50mb'}));
app.use(express.urlencoded({ extended: config.url_encode === 'true' }));
app.use(helmet());

//file retrieve
app.use(express.static('uploads'));

//rate limiter
const limiter = rateLimit({windowMs: Number(config.request_time),max: Number(config.request_number),});
app.use(limiter);

//set cache
app.set('etag', config.WEB_CACHE === 'true'); 


//routes
app.use("/api/v1",bookRoutes)
app.use("/api/v1",userRoutes)
app.use("/api/v1",BrandsRoutes)
app.use("/api/v1",CategoryRoutes)
app.use("/api/v1",ProductRoutes)










//error handling middleware
 app.use(errorHandler) 



app.get('/', (req, res) => {
  res.send('backen server is oky !')
})

export default app;