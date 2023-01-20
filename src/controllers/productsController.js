const { validationResult } = require('express-validator');// importa los resultados de las validaciones
const { privateDecrypt } = require('crypto');

const fs  = require("fs");
const path = require("path");
//const multer = require("multer");
const db = require('../database/models'); //requiere la base de datos. no tocar

const toThousand = num => (num ).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

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
      
    let producto = await db.products.create({
        name : req.body.name,
        brand : req.body.brand,
        product_category_id: req.body.category,
        image: req.file.filename,
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
                res.render('products/detailProducts', { producto: product});
            })
            .catch(error => res.send(error));  
   },

  //editar un producto
  edit: (req,res) => {
    db.products.findByPk (req.params.id)
    .then(function ( objetoProducto){
      res.render("products/editProducts", {producto: objetoProducto}) 
    } )
  },

  //actualizar el producto
  update: async (req,res)=>{

   let edit = await db.products.update({ 
    name : req.body.name,
    brand : req.body.brand,
    product_category_id: req.body.category,
    image: req.file.filename,
    detail : req.body.detail,
    price : req.body.productprice,
    discount: req.body.discount,
    expiration_date: req.body.expiration_date,
    creation_date: req.body.creation_date
    }
  ,{
      where: {
        id: req.params.id
      }
    })
    res.redirect('/products')
    },

    //eliminar un producto
    delete: async (req,res) => {
      
    },

    //Api producto//
    
    list: (req, res) => {
      db.producto.findAll({include: [{association: 'categoria_producto'}]})
      .then(function(productos){
      
          let listaProductos = []
          
          for (producto of productos){
              let aux = {
                  nombre: producto.name,
                  precio: producto.price,
                  categoria: producto.categoria_producto.name,
              }
              listaProductos.push(aux);
          }

          let otherProducts = []
          
          for (producto of productos){
              if(producto.productoCategoria.id == 3){
              otherProducts.push(producto);
          }}

          res.json({descripcion: "Lista de productos",
          codigo:200,
          products: listaProductos,
          count: listaProductos.length,
          countByCategory: {Perros: productosPerro.length, Gatos: productosGato.length, Otros: otherProducts.length}
      
        })}) 
  },

  categories: (req,res) => {
      db.categoria.findAll()
      .then(function(categorias){
      res.json({descripcion:"Total Categorias",
          codigo:200,
          categories: categoria_producto,
          count: categoria_producto.length
      })
      })
  },

  product: (req,res) => {
      db.producto.findByPk(req.params.id, {include: [{association: 'productoCategoria'}]})
      .then(function(product){
      res.json({descripcion:"Producto",
          codigo:200,
          producto: product
  })  
  })
  }


  };
   
  module.exports = productsController;