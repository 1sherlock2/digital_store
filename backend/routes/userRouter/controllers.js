const errorMiddleWare = require('../../middlewares/errorMiddleWare');

module.exports = {
  authController: async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
      return next();
    }
    res.json({id});
  },
  loginController: async  (req, res) => {
    console.log('auth');
  },
  registController: async  (req, res) => {
    console.log('reg');
  },
};
