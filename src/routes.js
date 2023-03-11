var express = require('express')
var router = express.Router()
var UserController = require('./controllers/UserController')

router.post('/', UserController.store)
router.get('/', UserController.show)
router.get('/', UserController.show)

module.exports = router;