const path = require("path");

const controlador = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/users/login"));
  },
};
module.exports = controlador;
