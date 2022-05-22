import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import { homeRouter, authRouter, movieRouter, userRouter } from './router';
import { ROUTE_PATH } from './config';
import { connectDB } from './config/connectDB';

const app = express();
const router = express.Router();
const PORT = 8080 || process.env.PORT;
const { USER, HOME, AUTH, MOVIE } = ROUTE_PATH;
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logger.log'),
  { flags: 'a' }
);

// template engine
app.set('view engine', 'ejs');
app.set('views', 'src/view');

// use middleware
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static file
app.use(express.static('./src/public'));
router.use(express.static('./src/public'));

// routes
const routes = {
  [USER]: userRouter,
  [HOME]: homeRouter,
  [AUTH]: authRouter,
  [MOVIE]: movieRouter,
};

// web routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/api', (req, res) => {
  res.send('API V1');
});

// api routes
app.use('/api', router);

Object.keys(routes).forEach((path) => {
  router.use(`/${path}`, routes[path]);
});

// 404 route
app.use((req, res) => res.render('404.ejs'));

// connect db and start server
connectDB(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
