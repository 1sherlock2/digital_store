const Router = require('express');
const router = new Router();
const { create, getAll, getOne } = require('./controllers');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);

module.exports = router;
