const fs  = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, '../database/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsDataBase, 'utf-8'));

let productsController = {
  //la de productos en general
  index: (req,res) => {
    const products = JSON.parse(fs.readFileSync(productsDataBase, 'utf-8'));
    res.render('products',{ps:products});
  },
  //crear el producto
  create: (req,res) =>{
    res.render('createProducts',);

  },
  //guardar producto creardo
  store: (req,res) =>{
    console.log(req.body);
    let productoNuevo = {
      id : (products[products.length-1].id)+1,
      name : req.body.name,
      brand : req.body.brand,
      category : req.body.category,
      image : req.body.image,
      detail : req.body.detail,
      price : req.body.price,
      //sale:req.body.sale;
      discount: req.body.discount,
      expiration_date: req.body.expiration_date,
      creation_date: req.body.creation_date
    };
    products.push(productoNuevo);
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
    res.redirect('/');

  },
  edit: (req,res) => {

  }


  //editar un producto
}



module.exports = productsController;








/* let productsController = { 

products: (req, res) => {
     products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
     res.render('products', {p: products});
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
} */