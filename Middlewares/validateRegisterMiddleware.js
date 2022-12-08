const { body } = require('express-validator');
const path = require('path');

let validationsRegister = [
    body('nombre').notEmpty().withMessage('El campo Nombre y Apellido no puede estar vacio'),
    body('email')
    .notEmpty().withMessage('El campo Email no puede estar vacio')//.bail()
    .isEmail().withMessage('Debes escribir un mail valido'),
    body('contrasena1').notEmpty().withMessage('El campo Contrasena no puede estar vacio'),
    body('filename').custom((value, {req})=>{
        
        let file = req.file; 
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if(!file){
            throw new Error('Debes subir una imagen')
        }else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })
]

module.exports = validationsRegister;
