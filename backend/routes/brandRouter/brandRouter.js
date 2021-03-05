const Router = require('express');
const router = new Router();

const { create, getAll } = require('./controllers');

router.get('/', getAll);
router.post('/', create);

module.exports = router;
