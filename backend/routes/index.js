const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter/userRouter');
const typeRouter = require('./typeRouter/typeRouter');
const brandRouter = require('./brandRouter/brandRouter');
const deviceRouter = require('./deviceRouter/deviceRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;
