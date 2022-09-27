const productosController = require ('./../controllers/productosController')

const express = require ('express');
const router = express.Router();

router.get ('/', productosController.index)

router.get ('/product', productosController.product)

router.get ('/productos222', productosController.productEspecial)

router.get ('/productos/:id', function(req,res){
    var p = req.params.id;
    console.log("el numero dado es el " + p);
    res.send ("el numero dado es el "+ p);

});

module.exports = router;