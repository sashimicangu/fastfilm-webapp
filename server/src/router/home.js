import express from 'express';
import homeController from '../controller/homeController';

const router = express.Router();

router.get('/', homeController.getHomeData);

export default router;
