const Router = require('express');
const router = new Router();

const { login, registr, deleteOne } = require('./controllers');

router.post('/login', login);
router.post('/registr', registr);
router.delete('/:id', deleteOne);

module.exports = router;
