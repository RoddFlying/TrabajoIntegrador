const Swal = require('sweetalert2');

boton.addEventListener('click', function(){
    let nombreProducto = document.getElementsByName('name');
    let precioProducto = document.getElementsByName('price');
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto};
    let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    productosCarrito.push(productoNuevo);
    localStorage.setItem('carrito',JSON.stringify(productosCarrito))
}) 