const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');
let productsController = require('../controllers/productsController')

//Multer Configuracion //

const ConfiguracionImagen = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,  '../../public/img/products'));
    },
    filename: function(req, file, cb) {
        let imageName = Date.now() + file.originalname ;
        cb (null,imageName);
    }
});

const uploadFile = multer ({ storage: ConfiguracionImagen});

//vista home, listado productos, detalle producto(boton editar)-> vista editar, vista crear producto,
// vista login, vista registro, vista perfil .

//vista de todos los productos
router.get("/", productsController.index);
//router.get("/products", productsController.products);

//vista de formulario de creación
router.get('/create', productsController.create);
router.post('/create', productsController.store);

//detalle del producto
router.get('/detail/:id', productsController.detail);

//editar el producto
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

//eliminar un producto

router.delete('/delete/:id', productsController.delete);



module.exports = router;