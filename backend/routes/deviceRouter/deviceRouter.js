const Router = require('express');
const router = new Router();
const { create, getAll, getOne } = require('./controllers');
const checkRole = require('../../middlewares/checkRoleMiddleware');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', checkRole('admin'), create);

module.exports = router;
