const { body } = require('express-validator');
const path = require('path');

let validationsRegister = [
    body('nombreUsuario').notEmpty().withMessage('El campo Nombre y Apellido no puede estar vacio'),
    body('emailUsuario')
    .notEmpty().withMessage('El campo Email no puede estar vacio').bail()
    .isEmail().withMessage('Debes escribir un mail valido'),
    body('passwordUsuario').notEmpty().withMessage('El campo Contrasena no puede estar vacio'),
    body('imageProfile').custom((value, {req})=>{
        
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
