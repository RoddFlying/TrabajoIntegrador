let productosCarrito = JSON.parse(localStorage.getItem('carrito'));

console.log(productosCarrito);

let total = productosCarrito.reduce((acc, items)=> acc + Number(items.precioFinal), 0 );

let div1 = document.getElementById('itemscart');

let div2 = document.getElementById('totalcart');

for (let p of productosCarrito){

    let nomb = document.createElement('h2');
    nomb.innerText = p.nombre;
    div1.appendChild(nomb);

    let precio = document.createElement('h3');
    precio.innerText = p.precio;
    div1.appendChild(precio);

    let disc = document.createElement('h4');
    disc.innerText = p.descuento;
    div1.appendChild(disc);

    let precioProd = document.createElement('h3');
    precioProd.innerText = p.precioFinal;
    div1.appendChild(precioProd);

}

let totalProd = document.createElement('h3');
totalProd.innerText = total;
div2.appendChild(totalProd);

