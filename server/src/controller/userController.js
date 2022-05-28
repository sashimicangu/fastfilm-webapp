import { dbConnection } from '../config/connectDB';
import User from '../model/User';

const getUserData = async (req, res) => {
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

const updateUserData = async (req, res) => {
  const { name, dob, email } = req.body;

  let update = { name, dob };
  await User.findOneAndUpdate({ email }, update);

  res.status(200).json({
    code: 1,
    message: 'Cập nhật thành công'
  });
};

export default {
  getUserData,
  updateUserData,
};
