const fs = require('fs');
const path = require ('path');

let products = [];

const db = require('../database/models');

//const Op = db.Sequelize.Op;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controlador = {
  index: (req, res) => { 
  
  res.render("home");

  res.render("/home", {products: products});

  },
  contact: (req, res) => {
    res.render('contact')
  },
  cart: (req,res)=>{
    res.render('cart/cart')
  }
};
module.exports = controlador;
