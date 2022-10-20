const path = require("path");

let usersController = {
  index: (req, res) => {
      res.render('Users/perfil')
},
  register: (req, res) => {
      res.render('Users/register')
},
  login: (req, res) => {
      res.render('Users/login')
},
  cart: (req, res) => {
      res.render('cart')
}};


module.exports = usersController;
