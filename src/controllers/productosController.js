const path = require ('path');

const controlador = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    },

    product: (req, res) => {
        res.send("producto223");
    },
    
    productEspecial: (req, res) => {
        res.send ("producto444");
    }
}

module.exports = controlador;