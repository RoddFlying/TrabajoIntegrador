
var boton = document.getElementById('agregarcarrito');

boton.addEventListener('click', ()=>{
    let nombreProducto = document.getElementById('name').innerText;
    let precioProducto = document.getElementById('price').innerText;
    let descuentoProducto = document.getElementById('discount').innerText;
    let precioFinalProducto = document.getElementById('finalprice').innerText;
    let imagenProducto = document.getElementById('image').innerText;
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen:imagenProducto, descuento: descuentoProducto, precioFinal: precioFinalProducto};
    let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (productosCarrito == undefined || productosCarrito == null){
        productosCarrito = []
    }
    productosCarrito.push(productoNuevo);
    localStorage.setItem('carrito',JSON.stringify(productosCarrito))
    alert('producto se sumo al carrito');
    console.log(productosCarrito);
}) 

//¿Como exportar el carrito?
//module.exports = productosCarrito;