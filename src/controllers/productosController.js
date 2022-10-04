const controlador ={
    login: (req , res) => {
         res.render('users/login');
     },
 
     registro: (req , res) => {
         res.render('users/registro');
     },
     carrito: (req , res) => {
         res.render('carrito');
     },
     detalle: (req , res) => {
         res.render('products/detalleproducto')
     },
     crear: (req , res) => {
         res.render('products/crearproducto')
     },
 }
 
 module.exports = controlador; 