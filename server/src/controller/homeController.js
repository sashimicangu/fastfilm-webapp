import Movie from '../model/Movie';

const getHomeData = async (req, res) => {
  let movies = await Movie.find({});
  const hotMovies = await Movie.find({}).sort({ premiere: -1 }).exec();
  const topViewMovies = await Movie.find({}).sort({ view: -1 }).exec();

  res.status(200).json({
    code: 1,
    message: 'Thành công',
    data: {
      movies,
      hotMovies,
      topViewMovies,
    },
  });
};

export default {
  getHomeData,
};
