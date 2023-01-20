const cartControllers = require("../controllers/cartControllers");

const express = require("express");
const router = express.Router();


//Show products cart//
router.get('/carrito', auth, cartController.index);

//Add to cart//
router.post('/carrito/addToCart', auth, cartController.addToCart); //upload.single('imageProd'),

//Delete product in cart//
router.delete('//carrito/deleteInCart/:id', auth, cartController.deleteCartItem);





module.exports = router;