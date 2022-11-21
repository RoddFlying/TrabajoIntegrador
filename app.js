//require//
const createError = require('http-errors');
const cookies = require ('cookie-parser');
const express = require("express");
//const logger = require('morgan');
const path = require("path");
const methodOverride = require('method-override'); //Procesamiento PUT y DELETE 

const session = require ('express-session');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


//express//
const app = express();

//middleware//
app.use( express.static(path.join(__dirname, '../public')));  //app.use( express.static(publicPath));
app.use(express.urlencoded({extended:false}));
//app.use(logger('dev'));
app.use(express.json());
app.use(cookies());
app.use(methodOverride ("_method")); //Procesamiento PUT y DELETE 

//template engine - ejs//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

//Routes//
//const router = require('./src/routes/index.routes'); //??
const mainRouter = require('./src/routes/mainRouter');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');

app.use("/", mainRouter); 
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.use(session({
  secret: 'shh, is a secret',
  resave:false ,
  saveUninitialized:false,
}));

app.use(userLoggedMiddleware);

//error//
app.use((req, res, next) => {
  res.status(404).render("not-found")
});

app.ise((err,req,res,next)=>{
  res.locals.message = err.message;
  res.local.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err: {};
  //render the error page
  res.status(err.status||500);
  res.render('error');
}

)

//listen//
app.listen(3000, () => {
  console.log("servidor corriendo puerto 3000");
});


module.exports = app;