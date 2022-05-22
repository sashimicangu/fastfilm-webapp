import Movie from '../model/Movie';

const getHomeData = async (req, res) => {
  // const [rows] = await dbConnection.execute('SELECT * FROM `tbl_user`');
  let docs = await Movie.find({});
  // docs = docs.map((doc) => {
  //   return {
  //     name: doc.name,
  //     email: doc.email,
  //     createAt: doc.createAt,
  //     updateAt: doc.updateAt,
  //   };
  // });
  res.json(docs);
};

export default {
  getHomeData,
};
