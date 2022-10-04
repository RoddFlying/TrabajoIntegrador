const path = require("path");

const controlador = {
  producto: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/producto"));
  },
  carrito: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/carrito"));
  },
};
module.exports = controlador;
