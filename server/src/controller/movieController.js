import { dbConnection } from '../config/connectDB';
import Movie from '../model/Movie';

const getAllMovie = async (req, res) => {
  const sort = req.query.sort;
  const search = req.query.search;

  if (!!search) {
    let movies = await Movie.find({}).exec();

    movies = movies.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    return res.status(200).json({
      code: 1,
      message: 'Thành công',
      data: movies,
    });
  }

  if (!!sort && sort == 1) {
    const movies = await Movie.find({}).sort({ premiere: -1 }).exec();

    return res.status(200).json({
      code: 1,
      message: 'Thành công',
      data: movies,
    });
  }

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
