import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import User from '../model/User';

require('dotenv').config();

let refreshTokens = [];

const register = async (req, res) => {
  const { email, name, password } = req.body;

  let user = await User.findOne({ email }).exec();
  console.log(user);

  if (user) {
    return res.status(200).json({
      error: { email: user.email },
      msg: 'The user already exists',
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await new User({ email, password: hashedPassword, name }).save();

  const accessToken = await JWT.sign({ email }, process.env.JWT_KEY, {
    expiresIn: '1m',
  });

  res.status(200).json({
    code: 1,
    message: 'Thành công',
    data: {
      email,
      name,
    },
    token: accessToken,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ error: 'Email or password is invalid' });
  }

  // Send JWT access token
  const accessToken = await JWT.sign({ email }, process.env.JWT_KEY, {
    expiresIn: '1m',
  });

  // Refresh token
  const refreshToken = await JWT.sign({ email }, process.env.REFRESH_JWT_KEY, {
    expiresIn: '5m',
  });

  res.json({
    code: 1,
    message: 'Thành công',
    data: user,
    token: accessToken,
  });
};

const logout = async (req, res) => {
  const refreshToken = req.header('x-auth-token');

  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.sendStatus(204);
};

export default {
  login,
  register,
  logout,
};
