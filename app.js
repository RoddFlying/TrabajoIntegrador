//requires

const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
//const cors = require('cors');

const {sequelize} = require ('./src/database/models') 
sequelize.sync({alter:false}).then(()=> console.log ('modelossincronizados'));

const userLoggedMiddleware = require('./Middlewares/userLoggedMiddleware');
//const logger = require('morgan');
const createError = require('http-errors');

//express//

const app = express();

//const methodOverride = require('method-override');

//middleware//
app.use( express.static(path.join(__dirname, '../public')));  
//app.use(express.urlencoded({extended: false})); (generaba error)


//app.use(cors());  
app.use(express.json());
app.use(cookies());
app.use(methodOverride ("_method")); //Procesamiento PUT y DELETE 

//template engine - ejs//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: 'shh, is a secret',
  resave:false ,
  saveUninitialized: false,
}));

//Routes//
const mainRouter = require('./src/routes/mainRouter');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');

app.use("/", mainRouter); 
app.use('/products', productsRouter);
app.use('/user', usersRouter); 

app.use(userLoggedMiddleware);

const publicPath = path.resolve(__dirname, './public');

app.use( express.static(publicPath));

app.use(methodOverride ("_method")); //Procesamiento PUT y DELETE

//ejs//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

//error//

app.use((req, res, next) => {
  res.status(404).render("not-found")
});

// API//

const apiRoutes = require('./src/routes/apiRouter')
app.use('/', apiRoutes)

//listen//

app.listen(3001, () => {
  console.log("servidor corriendo puerto 3001");
});

// exports

module.exports = app;