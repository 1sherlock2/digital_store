const errorMiddleWare = require('../../middlewares/errorMiddleWare');

module.exports = {
  authController: (req, res, next) => {
    const { id } = req.query;
    if (!id) {
      return next();
    }
    res.json(query);
  },
  loginController: (req, res) => {
    console.log('auth');
  },
  registController: (req, res) => {
    console.log('reg');
  },
};
