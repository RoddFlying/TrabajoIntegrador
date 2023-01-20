const { validationResult } = require('express-validator');// importa los resultados de las validaciones
const { privateDecrypt } = require('crypto');

const fs  = require("fs");
const path = require("path");
//const multer = require("multer");
const db = require('../database/models'); //requiere la base de datos. no tocar

const toThousand = num => (num ).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const cartController = {
   
  addToCart: async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const product = await product.findByPk(product_id, {
        include: ['Category']
      });
      let item_carrito = await db.cart_item.create({
        name: product.name,
        price : product.price,
        discount: product.discount,
        image: product.image,
        product_id: product.id,
    
      });

      res.redirect('products/products');

    } catch (error) {
        console.log(error);
    }
  },
  index:  async (req, res) => {
    await db.cart_item
    .findAll({ include: [{ association: "products" }] })
      .then((products) => {
        let itemList = [];
        for (item of cart_item) {
          itemList.push(products);
        }
        res.render("cart/cart", {
        productosCarrito: itemList,
          //toThousand: toThousand,
        });
      });
   
  },
  deleteInCart:  async (req, res) => {
    try {
      await cart_item.destroy({
        where: {
          product_id: req.body.product_id,
        }
      });
      res.redirect('/cart');

    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = cartController;
