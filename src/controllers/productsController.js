const fs  = require("fs");
const path = require("path");
const multer = require("multer");
//const db = require('../database/models'); //requiere la base de datos. no tocar

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const productsController = {
  //la de productos en general
  index: async (req,res) => {
  //  let Products = await db.products.findAll();//productos seria el alias   //reemplaza al JSON por la base de datos -- 
  
     // res.render('products',{ps: products});    //{ps:product}); el ps es por como lo llamo desde la vista
  
  res.JSON (Products)
  res.JSON (Products)
  },
  //crear el producto
   create: (req,res) =>{
    res.render('createProducts');

  },
 
    //guardar producto creardo
    store: (req,res)=>{
    // db.products.store({
    //   //no poner id porque ya lo pone automaticamente
    //     name : req.body.name,
    //     brand : req.body.brand,
    //     category : req.body.category,
    //     image : req.body.image,
    //     detail : req.body.detail,
    //     price : req.body.price,
    //     //sale:req.body.sale;
    //     discount: req.body.discount,
    //     expiration_date: req.body.expiration_date,
    //     creation_date: req.body.creation_date
    // })
    res.render('/')
  },

  //mostrar detalles del producto
  detail: (req,res)=>{
    // db.products.findByPk(req.params.id)
    //   .then(function(product){
    //     req.render('detailProducts',{producto: objetoProducto})
    //   })
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
  // // db.products.update({
     
  //       name : req.body.name,
  //       brand : req.body.brand,
  //       category : req.body.category,
  //       image : req.body.image,
  //       detail : req.body.detail,
  //       price : req.body.price,
  //       //sale:req.body.sale;
  //       discount: req.body.discount,
  //       expiration_date: req.body.expiration_date,
  //       creation_date: req.body.creation_date
  //   }
  // ,{
  //     where: {
  //       id: req.params.id
  //     }
  //   })
    res.render('/')
    },

    //eliminar un producto
    delete: (req,res) => {
      
    } 

  };
   
  module.exports = productsController;