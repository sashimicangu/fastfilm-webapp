import { dbConnection } from '../config/connectDB';
import Category from '../model/Category';
import Movie from '../model/Movie';

const getAllMovie = async (req, res) => {
  const hot = req.query.hot;
  const sort = req.query.sort;
  const search = req.query.search;

  if (!!search) {
    let movies = await Movie.find({}).exec();

    movies = movies.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return res.status(200).json({
      code: 1,
      message: 'Thành công',
      data: movies,
    });
  }

  // top phim
  if (!!sort && sort == 1) {
    // loc theo truong premiere
    const movies = await Movie.find({}).sort({ premiere: -1 }).exec();

    return res.status(200).json({
      code: 1,
      message: 'Thành công',
      data: movies,
    });
  }

  if (!!hot && hot == 1) {
    let movies = await Movie.find({});

    movies = movies.filter((movie) => movie.toObject().rating >= 7);

    return res
      .status(200)
      .json({ code: 1, message: 'Thành công', data: movies });
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

  let movie = await Movie.findById(id).exec();
  movie = movie.toObject();
  let categoryIdList = movie.category.split(',');

  let categoryList = [];
  for (let value of categoryIdList) {
    let category = await Category.findOne({ id: value }).exec();
    categoryList.push(category);
  }

  movie.category = categoryList;

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
