const express = require('express');
const router = express.Router();
let productsController = require('../controllers/productsController');
let usersController = require('../controllers/usersController');

router.get('/users', usersController.list);

router.get('/users/:id', usersController.user)

router.get('/allproducts', productsController.list)

router.get('/categories', productsController.categories)

router.get('/product/:id', productsController.product)

router.get('/sarasa', productsController.sarasa)

module.exports = router