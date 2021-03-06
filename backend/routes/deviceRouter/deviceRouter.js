const Router = require('express');
const router = new Router();
const { create, getAll, getOne } = require('./controllers');

router.post('/', create);
router.get('/');
router.get('/:id');

module.exports = router;
