const fs  = require("fs");
const path = require("path");

const controlador = {
  producto: (req, res) => {
    
  },
  carrito: (req, res) => {
   
  },
};
//Create a product //

store: (req, res) => {
  idNuevo = 0;
  for (let s of products){
    if (idNuevo < s.id){
       idNuevo=s.id;
    }
  }
  idNuevo++;

  let nombreImagen = req.file.filename;

  let productoNuevo = {
    id: idNuevo,
    name: req.body.name ,
    price: req.body.price ,
    discount: req.body.discount,
    category: req.body.categorym,
    description: req.body.description,
    iamge: nombreImagen
  };

  products.push(productoNuevo);
  
  fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

  res.redirect('/');
};

module.exports = controlador;
