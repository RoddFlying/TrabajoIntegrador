// const productosRoutes = require ('./routes/productosRoutes'); 

// const express = require('express');
//   const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname, './public')));

// app.set('view engine', 'ejs'); 

// app.use ('/', mainRouter ); 

// app.get('/', function (req, res) {
// res.sendFile(path.resolve(__dirname, './views/index.html'));
//});

//app.get('/register', function (req, res) {
 // res.sendFile(path.resolve(__dirname, './views/register.html'));
// });

// app.get('/login', function (req, res) {
//  res.sendFile(path.resolve(__dirname, './views/login.html'));
// });

// app.get('/contact', function (req, res) {
// res.sendFile(path.resolve(__dirname, './views/contact.html'));
// });

// app.get('/cart', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './views/cart.html'));
// });

// app.get('/product', function (req, res) {
 // res.sendFile(path.resolve(__dirname, './views/product.html'));
// });

//app.listen(process.env.PORT || 3000, function() {
  //console.log("Servidor corriendo");
//}); 


const productosRoutes = require("./src/routes/productosRoutes");
const mainRoutes = require("./src/routes/mainRoutes");
const singinRoutes = require("./src/routes/singinRoutes");

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/", mainRoutes); 

app.use("/", productosRoutes);

app.use("/", singinRoutes);

app.use("*", function (req, res) {
  res.send("Ruta equivocada");
});

app.listen(3000, () => {
  console.log("servidor corriendo puerto 3000");
});


