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


router.get('/', productsController.home);

router.get('/createProducts', productsController.create);
router.post('/createProducts', uploadFile.single('imageProduct'), productsController.store);

router.get("/editProducts/:id", productsController.edit);
router.put('/editProducts/:id' , uploadFile.single('imageEdit'), productsController.update);

router.get("/detailProducts", productsController.detail);
router.get("/detailProducts/:id", productsController.detailId);

router.delete("/delete/:id", productsController.delete);


module.exports = router;