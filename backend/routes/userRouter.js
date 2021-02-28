const Router = require('express');
const router = new Router();

router.get('/auth', (req, res) => {
  try {
    res.status(200).json({ message: 'message' });
  } catch (error) {
    console.log(error);
  }
});

router.post('/login');
router.post('/registration');

module.exports = router;
