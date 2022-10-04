const productosController = require("./../controllers/productosController");

const express = require("express");
const router = express.Router();

router.get("/producto", productosController.producto);

router.get("/carrito", productosController.carrito);

module.exports = router;
