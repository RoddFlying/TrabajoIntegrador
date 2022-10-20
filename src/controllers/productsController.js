const fs  = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../database/productsDataBase.json')
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))


let productsController = {

home: (req, res) => {
     products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
     res.render('home', {p: products});
    // res.render('home');//Es para probar si funciona vista
},
  create: (req,res) => {
    res.render('products/createProducts');
},
  edit: (req,res) => {
    let idProducto = req.params.id;
    let objProducto;

    for (let p of products){
        if (idProducto == p.id){
            objProducto=p;
            break;
        }
    }
    res.render('products/editProducts',{ p: objProducto});
    
},

detail: (req, res) => {
  res.render('products/detailProducts', {p: products});
},

detailId: (req, res) => {
  let idProducto = req.params.id;
  let objProducto;

  for (let p of products){
      if (idProducto == p.id){
          objProducto=p;
          break;
      }
  }
  res.render('products/productId',{ p: objProducto});
},

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
}, 

update: (req,res) => {
  let idProducto = req.params.id;
  let imageEdit = req.file.filename;

  for (let p of products){
      if (idProducto == p.id){
          p.nombre = req.body.nombre;
          p.precio = req.body.precio;
          p.descripcion = req.body.descripcion;
          p.image = imageEdit;
          break;
      }
  }
  fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
  res.redirect('/');
},

delete: (req,res) => {
  let idProducto = req.params.id;
  
  let arrProductos = products.filter(function(elemento){
      return elemento.id!=idProducto;
  })
  
  products = arrProductos ;
  fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
  res.redirect('/');
  }
}

module.exports = productsController;