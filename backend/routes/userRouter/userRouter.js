const Router = require('express');
const authMiddleware = require('../../middlewares/authMiddleware');
const router = new Router();

const { login, register, deleteOne, getAll, check } = require('./controllers');

router.get('/check', authMiddleware, check);
router.post('/login', login);
router.post('/register', register);
router.delete('/:id', deleteOne);

module.exports = router;
