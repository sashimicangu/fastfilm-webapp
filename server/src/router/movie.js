import express from 'express';
import authController from '../controller/authController';
import movieController from '../controller/movieController';

const router = express.Router();

router.get('/', movieController.getAllMovie);
router.get('/:id', movieController.getMovieDetail);
router.post('/insert', movieController.insertMovie);


export default router;
