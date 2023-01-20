
var boton = document.getElementById('agregarcarrito');

boton.addEventListener('click', ()=>{
    let nombreProducto = document.getElementsByName('name');
    let precioProducto = document.getElementsByName('price');
    let descuentoProducto = document.getElementsByName('discount');
    let precioFinalProducto = document.getElementsByName('finalprice')
    let imagenProducto = document.getElementsByName('image');
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen:imagenProducto, descuento: descuentoProducto, precioFinal: precioFinalProducto};
    let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (productosCarrito == undefined || productosCarrito == null){
        productosCarrito = []
    }
    productosCarrito.push(productoNuevo);
    localStorage.setItem('carrito',JSON.stringify(productosCarrito))
    alert('producto se sumo al carrito');
}) 
console.log(productosCarrito);
//¿Como exportar el carrito?
//module.exports = productosCarrito;