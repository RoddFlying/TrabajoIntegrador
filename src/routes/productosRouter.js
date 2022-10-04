const productsController = require('../controllers/productsController')


const express = require('express');
const router = express.Router();

router.get('/login',productsController.login);
router.get('/registro', productsController.registro)
router.get('/carrito', productsController.carrito)
router.get('/detalleproducto', productsController.detalle)
router.get('/crearproducto', productsController.crear)

module.exports = router;