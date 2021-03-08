const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter/userRouter');
const typeRouter = require('./typeRouter/typeRouter');
const brandRouter = require('./brandRouter/brandRouter');
const deviceRouter = require('./deviceRouter/deviceRouter');
const deleteTable = require('./deleteTable/deleteTable');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/deleteTable', deleteTable);

module.exports = router;
