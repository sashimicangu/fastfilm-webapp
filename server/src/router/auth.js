import express from 'express';
import authController from '../controller/authController';

const router = express.Router();

// router.get('/', (req, res) => res.json('here'));
// sign up
router.post('/register', authController.register);
// sign in
router.post('/login', authController.login);
// logout
router.delete('/logout', authController.logout);

export default router;
