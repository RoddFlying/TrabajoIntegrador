const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const methodOverride = require('method-override'); //Procesamiento PUT y DELETE
app.use(methodOverride ("_method")); //override

const productsRouter = require('./src/routes/productsRouter')
app.use("/", productsRoutes); 

const usersRouter = require('./src/routes/usersRouter')
app.use('/', usersRouter);

app.use((req, res, next) => {
   res.status(404).render("not-found")
});

app.listen(3000, () => {
  console.log("servidor corriendo puerto 3000");
});


