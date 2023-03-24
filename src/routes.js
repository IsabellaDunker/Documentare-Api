var express = require('express')
var router = express.Router()

var UserController = require('./controllers/UserController')
var ProductController = require('./controllers/ProductController')

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

// rotas dos produtos
router.post('/products', verifyJWT, ProductController.store)
router.get('/products/:id', verifyJWT, ProductController.show)
router.get('/products', verifyJWT, ProductController.index)
router.put('/products/:id', verifyJWT, ProductController.update)
router.delete('/products/:id', verifyJWT, ProductController.delete)

module.exports = router;