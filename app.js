const productosRoutes = require ('./routes/productosRoutes'); //Nuevo require //

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.use ('/', productosRoutes ); // nueva ruta conectada al primer require//

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/contact.html'));
});

app.get('/cart', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/cart.html'));
});

app.get('/product', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/product.html'));
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
});

