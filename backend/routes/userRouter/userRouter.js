const Router = require('express');
const router = new Router();

const {
  authController,
  loginController,
  registController,
} = require('./controllers');

router.get('/auth', authController, (req, res) => {
  res;
});
router.post('/login', loginController, (req, res) => {});
router.post('/registration', registController, (req, res) => {});

module.exports = router;
