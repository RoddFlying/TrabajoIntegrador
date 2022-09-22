const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/contact.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/cart.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/product.html'));
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
});

