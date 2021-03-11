const Router = require('express'),
  router = new Router(),
  { create, getAll, getOne } = require('./controllers'),
  checkRole = require('../../middlewares/checkRoleMiddleware');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', checkRole('admin'), create);

module.exports = router;
