const Swal = require('sweetalert2');

boton.addEventListener('click', ()=>{
    let nombreProducto = document.getElementsByName('name');
    let precioProducto = document.getElementsByName('finalPrice');
    let imagenProducto = document.getElementsByName('image');
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen:imagenProducto};
    let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    productosCarrito.push(productoNuevo);
    localStorage.setItem('carrito',JSON.stringify(productosCarrito))
}) 