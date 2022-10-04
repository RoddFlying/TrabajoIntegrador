const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController')

router.get('/carrito', productosController.carrito)

//router.get('/detalleproducto', productosController.detalle)
//router.get('/crearproducto', productosController.crear)

module.exports = router;