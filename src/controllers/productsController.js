const { validationResult } = require('express-validator');// importa los resultados de las validaciones
const { privateDecrypt } = require('crypto');

const fs  = require("fs");
const path = require("path");
//const multer = require("multer");
const db = require('../database/models'); //requiere la base de datos. no tocar

const toThousand = num => (num || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const productsController = {
  //la de productos en general
  index: async (req,res) => {
    //error dice de pasar async: true - adonde va?
    await db.products
      .findAll({ include: [{ association: "categoria_producto" }] })
      .then((products) => {
        let productsList = [];
        for (products of products) {
          productsList.push(products);
        }
        res.render("products/products", {
          ps: productsList,
          toThousand: toThousand,
        });
      });
  },
  //crear el producto
   create: (req, res) =>{
    res.render('products/createProducts');

  },
    //guardar producto creado

    store: async (req,res)=>{
      console.log( 'hola',req.file )
    let producto = await db.products.create({
        name : req.body.name,
        brand : req.body.brand,
        product_category_id: req.body.category,
        image : req.file.filename, //ver que pasa q todavia no funciona
        detail : req.body.detail,
        price : req.body.productprice,
        discount: req.body.discount,
        expiration_date: req.body.expiration_date,
        creation_date: req.body.creation_date
    });
    console.log(producto);
    res.redirect('/');
  },

  //mostrar detalles del producto
  detail: async  (req,res)=>{
   
    db.products.findByPk(req.params.id)
    
            .then(product => {
                res.render('products/detailProducts', { product });
            })
            .catch(error => res.send(error));  
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
   db.products.update({
     
        name : req.body.name,
        brand : req.body.brand,
        category : req.body.category,
        image : req.file.imageProd,
        detail : req.body.detail,
        price : req.body.price,
        discount: req.body.discount,
        expiration_date: req.body.expiration_date,
        creation_date: req.body.creation_date
    }
  ,{
      where: {
        id: req.params.id
      }
    })
    res.render('/')
    },

    //eliminar un producto
    delete: async (req,res) => {
      
    } 

  };
   
  module.exports = productsController;