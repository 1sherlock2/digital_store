const Router = require('express');
const router = new Router();

const { login, register, deleteOne, check } = require('./controllers');

router.get('/', check);
router.post('/login', login);
router.post('/register', register);
router.delete('/:id', deleteOne);

module.exports = router;
