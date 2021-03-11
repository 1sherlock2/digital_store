const statusCode = require('../utils/responseValue');
const jwt = require('jsonwebtoken');

module.exports = (role) => {
  return (req, res, next) => {
    try {
      if (req.method === 'OPTIONS') {
        next();
      }
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return statusCode(res, 401, { message: 'User is not authentication' });
      }
      const decoded = jwt.verify(token, process.env.PRIVAT_KEY);
      if (decoded.role !== role) {
        return statusCode(res, 403, { message: 'You have no rights admin' });
      }
      req.user = decoded;
      next();
    } catch (e) {
      console.log(e);
      return statusCode(res, 403, {
        message: 'Error at check role',
      });
    }
  };
};
