const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')

router.get('/user', userRouter)
router.get('/type', typeRouter)
router.get('/brand', brandRouter)
router.get('/device', deviceRouter)

module.exports = router
