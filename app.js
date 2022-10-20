const express = require("express");
const path = require("path");
const app = express();

const methodOverride = require('method-override'); //Procesamiento PUT y DELETE
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');


const publicPath = path.resolve(__dirname, './public');
app.set("view engine", "ejs");
app.use( express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride ("_method")); 

app.use("/", productsRouter); 

app.use('/', usersRouter);

app.use((req, res, next) => {
   res.status(404).render("not-found")
});

app.listen(3000, () => {
  console.log("servidor corriendo puerto 3000");
});


