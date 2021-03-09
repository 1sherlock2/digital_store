const statusCode = require('../utils/responseValue');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if (req.method === 'OPTIONS') {
      next();
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return statusCode(res, 401, { message: 'User is not authentication' });
    }
    const decoded = jwt.verify(token, process.env.PRIVAT_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    return statusCode(res, 403, {
      message: 'Error: User is not authentication',
    });
  }
};
