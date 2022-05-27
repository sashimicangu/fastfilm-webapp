import jwt from 'jsonwebtoken';
const promisify = require('util').promisify;

const verify = promisify(jwt.verify).bind(jwt);

const authToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ code: 0, message: 'Vui lòng đăng nhập' });
  }

  const accessToken = process.env.JWT_KEY;

  let verified
  try {
    verified = await verify(
      token,
      accessToken
    );
  } catch (e) {}

  if (!verified) {
		return res
			.status(401)
			.send('Bạn không có quyền truy cập vào tính năng này!');
	}

  return next();
};

export default authToken;
