import { dbConnection } from '../config/connectDB';
import User from '../model/User';

const getUserData = async (req, res) => {
  console.log(req.headers)

  // const [rows] = await dbConnection.execute('SELECT * FROM `tbl_user`');
  let docs = await User.find({});
  docs = docs.map((doc) => {
    return {
      name: doc.name,
      email: doc.email,
      createAt: doc.createAt,
      updateAt: doc.updateAt,
    };
  });
  res.json(docs);
};

export default {
  getUserData,
};
