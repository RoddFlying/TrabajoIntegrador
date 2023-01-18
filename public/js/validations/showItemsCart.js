let productosCarrito = JSON.parse(localStorage.getItem('carrito'));
//agregar for para mostrar

// productosCarrito.forEach(product => {
 
// });
const total = productosCarrito.reduce((acc, items)=> acc + items.precio, 0 )