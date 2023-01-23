
var boton = document.getElementById('agregarcarrito');

boton.addEventListener('click', ()=>{
    let nombreProducto = document.getElementById('name').innerText;
    let precioProducto = document.getElementById('price').innerText;
    let descuentoProducto = document.getElementById('discount').innerText;
    if (descuentoProducto == undefined || descuentoProducto == null){
        descuentoProducto = 00;
    }
    let precioFinalProducto = document.getElementById('finalprice').innerText;
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, descuento: descuentoProducto, precioFinal: precioFinalProducto};
    let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (productosCarrito == undefined || productosCarrito == null){
        productosCarrito = []
    }
    
    productosCarrito.push(productoNuevo);
    localStorage.setItem('carrito',JSON.stringify(productosCarrito))
    alert('producto se sumo al carrito');
    console.log(productosCarrito);
}) 

