const fs = require('fs');
const path = require ('path');

let productsdb = [];

const db = require('../database/models');

//const Op = db.Sequelize.Op;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controlador = {
  index: (req, res) => { 
  
  res.render("home");

  res.render("./home", {products: products});

  },
  contact: (req, res) => {
    res.render('contact')
  },

};
module.exports = controlador;
