import { dbConnection } from '../config/connectDB';

const getUserData = async (req, res) => {
  const [rows] = await dbConnection.execute('SELECT * FROM `tbl_user`');

  res.json(rows)
}

export default {
  getUserData
}