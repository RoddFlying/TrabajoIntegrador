const fs  = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsDataBase, 'utf-8'));

let productsController = {
  //la de productos en general
  index: (req,res) => {
    products = JSON.parse(fs.readFileSync(productsDataBase, 'utf-8'));
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
  //mostrar detalles del producto
  detail: (req,res)=>{
    let idProducto = req.params.id;
    let objetoProducto;
    for(let o of products){
      if (idProducto == o.id){
        objetoProducto = o;
        break;
      }
    }
    req.render('detailProducts',{producto: objetoProducto})
  },
  //editar un producto
  edit: (req,res) => {
    let idProducto = req.params.id;
    let objetoProducto;
    for(let o of products){
      if (idProducto == o.id){
        objetoProducto = o;
        break;
      }
    }
    req.render('editProducts',{producto: objetoProducto})

  },
  //actualizar el producto
  update: (req,res)=>{
    let idProducto = req.params.id;
    for(let o of products){
      if (idProducto == o.id){
          o.name = req.body.name;
          o.brand = req.body.brand;
          o.category = req.body.category;
          o.image = req.body.image;
          o.detail = req.body.detail;
          o.price = req.body.price;
          //o.sale = req.body.sale;
          o.discount = req.body.discount;
          o.expiration_date = req.body.expiration_date;
          o.creation_date = req.body.creation_date;
        break;
      }
      }
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
    res.redirect('/');
    },
    //eliminar un producto
    delete: (req,res) => {
      let idProducto = req.params.id;
      let arreyProductos = products.filter(function(elemento){
        return elemento.id1=idProducto;
      })
    for(let o of products){
      if (idProducto == o.id){
        
        break;
      }
    }
    fs.writeFileSync(productsFilePath,JSON.stringify(arreyProductos,null," "));
    res.redirect('/');
    }

  };
   
  module.exports = productsController;