import express from 'express';
import { dbConnection } from '../config/connectDB';

const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await dbConnection.execute('SELECT * FROM `tbl_user`');

  res.json(rows)
});

export default router;
