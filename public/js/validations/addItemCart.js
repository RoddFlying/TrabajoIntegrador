const Swal = require('sweetalert2');

let boton = document.getElementById('agregarcarrito');

boton.addEventListener('click', ()=>{
    let nombreProducto = document.getElementsByName('name');
    let precioProducto = document.getElementsByName('finalPrice');
    let imagenProducto = document.getElementsByName('image');
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen:imagenProducto};
    let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (productosCarrito == undefined || productosCarrito == null){
        productosCarrito = []
    }
    productosCarrito.push(productoNuevo);
    localStorage.setItem('carrito',JSON.stringify(productosCarrito))
    alert('producto se sumo al carrito');
}) 

//¿Como exportar el carrito?
//module.exports = productosCarrito;