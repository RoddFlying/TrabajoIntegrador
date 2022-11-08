const path = require("path");

let usersController = {
 
  login: (req, res) => {
      res.render('users/login');
},
  register: (req, res) => {
  res.render('users/register')
},
  profile: (req, res) => {
  res.render('users/perfil')
},

  cart: (req, res) => {
      res.render('cart')
}};


module.exports = usersController;
