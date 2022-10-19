const fs = require('fs');
const path = require ('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controlador = {
  index: (req, res) => { 

    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    res.render("./home", {products: products});

  },
  search: (req,res)=>{

  },
};
module.exports = controlador;
