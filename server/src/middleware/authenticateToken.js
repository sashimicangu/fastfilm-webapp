import jwt from 'jsonwebtoken'

const authToken = async (req, res, next) => {

  const token = req.header('x-auth-token')

  if (!token) {
    res.status(400).json({errors: [{msg: "Token not found"}]})
  }

  // try {

  // }
}