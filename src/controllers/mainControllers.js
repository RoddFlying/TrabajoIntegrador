const path = require("path");

const controlador = {
  index: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/index"));
  },
};
module.exports = controlador;
