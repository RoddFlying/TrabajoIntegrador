const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');
const productsController = require('../controllers/productsController')


//Multer Configuracion //

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,  '../../public/img/products'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        //let imageName = Date.now() + file.originalname ; cb (null,imageName);
    }
});

const uploade = multer ({ storage: storage});



//vista home, listado productos, detalle producto(boton editar)-> vista editar, vista crear producto,
// vista login, vista registro, vista perfil .

//vista de todos los productos
router.get("/", productsController.index);

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
