const express = require('express');
const router = express.Router();

const multer = require ('multer'); //Multer//

// Requerimiento del controller //

const productsController = require('../controllers/productsController')

//Multer Configuracion //

const ConfiguracionImagen = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,  '../../public/images/products'));
    },
    filename: function(req, file, cb) {
        let imageName = Date.now() + file.originalname ;
        cb (null,imageName);
    }
});

const uploadFile = multer ({ storage: ConfiguracionImagen});

// Carrito //

router.get('/carrito', productsController.carrito)

//Get all products //

router.get('/', productsController.home);

// Create a product // 

router.get('/createProducts', productsController.create);
router.post('/createProducts' , uploadFile.single('imageProduct'), productsController.store);

// Get a product //

router.get("/detail/:id", productsController.detail);

//Edit a product //

router.get("/detail/:id", productsController.edit);
router.put("edit/:id", productsController.update);

//Delete product //

router.delete("/:id", productsController.destroy);

module.exports = router;