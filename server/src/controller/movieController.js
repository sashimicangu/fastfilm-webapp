import { dbConnection } from '../config/connectDB';
import Movie from '../model/Movie';

const getAllMovie = async (req, res) => {
  const movies = await Movie.find({});

  res.status(200).json({
    code: 1,
    message: 'Thành công',
    data: movies,
  });
};

const insertMovie = async (req, res) => {
  const {
    name,
    subtitle,
    release,
    author,
    region,
    type,
    premiere,
    image,
    cover,
    description,
    trailer,
  } = req.body;

  await new Movie({
    name,
    subtitle,
    release,
    author,
    region,
    type,
    premiere,
    image,
    cover,
    description,
    trailer,
  }).save();

  res.status(200).json({
    code: 1,
    message: 'Thành công',
  });
};

const getMovieDetail = async (req, res) => {
  const id = req.params.id;

  const movie = await Movie.findById(id).exec();

  res.status(200).json({
    code: 1,
    message: 'Thành công',
    data: movie,
  });
};

export default {
  getAllMovie,
  insertMovie,
  getMovieDetail,
};
