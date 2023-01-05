const { validationResult } = require('express-validator');// importa los resultados de las validaciones
const { privateDecrypt } = require('crypto');

const fs  = require("fs");
const path = require("path");
const multer = require("multer");
const db = require('../database/models'); //requiere la base de datos. no tocar

const toThousand = num => (num || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const productsController = {
  //la de productos en general
  index: async (req,res) => {
    //error dice de pasar async: true - adonde va?
    await db.products
      .findAll({ include: [{ association: "categoriaProductos" }] })
      .then((products) => {
        let productsList = [];
        for (product of products) {
          productsList.push(product);
        }
        res.render("products/products", {
          ps: productsList,
          toThousand: toThousand,
        });
      });
  },
  //crear el producto
   create: (req,res) =>{
    res.render('products/createProducts');

  },
 
    //guardar producto creardo
    store: async (req,res)=>{
    let producto = await db.products.create({
      //no poner id porque ya lo pone automaticamente
        name : req.body.name,
        brand : req.body.brand,
        product_Category_id: req.body.category,
       // image : req.file.image,
        detail : req.body.detail,
        price : req.body.price,
        discount: req.body.discount,
        expiration_date: req.body.expiration_date,
        creation_date: req.body.creation_date
    });
    console.log(producto);
    //res.render('/')
  },

  //mostrar detalles del producto
  detail: async  (req,res)=>{
    // db.products.findByPk(req.params.id)
    //   .then(function(product){
    //     req.render('products/detailProducts',{producto: objetoProducto})
    //   })
   },

  //editar un producto
  edit: async  (req,res) => {
    let idProducto = req.params.id;
    let objetoProducto;
    for(let o of products){
      if (idProducto == o.id){
        objetoProducto = o;
        break;
      }
    }
    req.render('products/editProducts',{producto: objetoProducto})

  },

  //actualizar el producto
  update: async (req,res)=>{
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
    delete: async (req,res) => {
      
    } 

  };
   
  module.exports = productsController;