const Router = require('express');
const router = new Router();
const { deleteTable } = require('./controllers');

router.delete('/:id', deleteTable);

module.exports = router;
