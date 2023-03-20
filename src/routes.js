var express = require('express')
var router = express.Router()
<<<<<<< HEAD

var UserController = require('./controllers/UserController')
var ProductController = require('./controllers/ProductController')

router.post('/user', UserController.store)
router.get('/user', UserController.show)

router.post('/product', ProductController.store)
router.get('/product', ProductController.show)

=======
var AuthController = require('./controllers/AuthController')
var UserController = require('./controllers/UserController')
var verifyJWT = require('./helpers/verifyJWT');

// rotas de login
router.post('/login', AuthController.login)
router.get('/logout', verifyJWT, AuthController.logout)
router.get('/renew', verifyJWT, AuthController.renew)

// rotas de usuário
router.post('/users', UserController.store)
router.get('/users/:id', verifyJWT, UserController.show)
router.get('/users', verifyJWT, UserController.index)
router.put('/users/:id', verifyJWT, UserController.update)
router.delete('/users/:id', verifyJWT, UserController.delete)

// rotas dos itens 
>>>>>>> 5d82b54dccd939bbb470e32de50b613775f3cb84

module.exports = router;