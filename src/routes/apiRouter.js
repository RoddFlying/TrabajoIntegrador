const express = require('express');
const router = express.Router();
let productsController = require('../controllers/productsController');
let usersController = require('../controllers/usersController');

router.get('/users', usersController.list);

router.get('/users/:id', usersController.user)

router.get('/products', productsController.list)

router.get('/categories', productsController.categories)

router.get('/product/:id', productsController.product)





module.exports = router