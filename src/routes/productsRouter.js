const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/carrito', productsController.carrito)

//router.get('/detalleproducto', productosController.detalle)
//router.get('/crearproducto', productosController.crear)

module.exports = router;