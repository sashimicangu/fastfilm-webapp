import express from 'express';
import userController from '../controller/userController';
import authToken from '../middleware/authenticateToken';

const router = express.Router();

router.get('/', authToken, userController.getUserData);

export default router;
