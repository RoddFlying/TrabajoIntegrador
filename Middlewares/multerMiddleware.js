const path = require('path');
const multer = require ('multer');

const configImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/avatars'))
    },
    filename: (req, file, cb) =>{
        let nombreImagen = Date.now() + file.originalname;
        cb(null, nombreImagen)
    }
});

const uploadFile = multer ({ storage : configImage });

module.exports = uploadFile;