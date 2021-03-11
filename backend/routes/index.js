const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter/userRouter'),
  typeRouter = require('./typeRouter/typeRouter'),
  brandRouter = require('./brandRouter/brandRouter'),
  deviceRouter = require('./deviceRouter/deviceRouter'),
  deleteTable = require('./deleteTable/deleteTable');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/deleteTable', deleteTable);

module.exports = router;
