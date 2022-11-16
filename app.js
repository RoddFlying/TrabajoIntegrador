const express = require("express");
const path = require("path");
const methodOverride = require('method-override'); //Procesamiento PUT y DELETE
const session = require ('express-session');

//express//
const app = express();

//const methodOverride = require('method-override'); //Procesamiento PUT y DELETE
const router = require('./src/routes/index.routes');

app.use(session({
  secret: 'shh, is a secret',
  resave:false ,
  saveUninitialized:false,
}));

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride ("_method")); //Procesamiento PUT y DELETE

//ejs//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


//Routes//
const mainRouter = require('./src/routes/mainRouter')
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');

app.use("/", mainRouter); 
app.use('/products', productsRouter);
app.use('/users', usersRouter);

//error/
app.use((req, res, next) => {
  res.status(404).render("not-found")
});

//listen//
app.listen(3000, () => {
  console.log("servidor corriendo puerto 3000");
});


