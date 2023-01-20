alert('ver los items');

let productosCarrito = JSON.parse(localStorage.getItem('carrito'));

const total = productosCarrito.reduce((acc, items)=> acc + items.precio, 0 )

let div1 = document.getElementById('itemscart')
for (let p of productosCarrito){

    let img1 = document.createElement('img');
    img1.innerText = p.imagen;
    div1.appendChild(img1);

    let h21 = document.createElement('h2');
    h21.innerText = p.nombre;
    div1.appendChild(h21);

    let h31 = document.createElement('h3');
    h21.innerText = p.precio;
    div1.appendChild(h31);

    let h32 = document.createAttribute('h3');
    h32.innerText = p.descuento;
    div1.appendChild(h32);

    let h22 = document.createAttribute('h2');
    h22.innerText = total;
    div1.appendChild(h22);
    
    
}


