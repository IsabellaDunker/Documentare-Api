var express = require('express')
var router = express.Router()

var UserController = require('./controllers/UserController')
var ProductController = require('./controllers/ProductController')

router.post('/user', UserController.store)
router.get('/user', UserController.show)

router.post('/product', ProductController.store)
router.get('/product', ProductController.show)


module.exports = router;