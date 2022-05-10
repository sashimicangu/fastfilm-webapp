import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('about api');
});

export default router;
