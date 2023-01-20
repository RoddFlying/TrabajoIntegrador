let productosCarrito = JSON.parse(localStorage.getItem('carrito'));

const total = productosCarrito.reduce((acc, items)=> acc + items.precio, 0 )

let div1 = document.getElementById('itemscart')
for (let p of productosCarrito){
    let p1 = document.createElement('p')
    p1.innerText = p.name;
    div1.appendChild(p1);
    
}


{/* <div class="itemsCart">
             <% productosCarrito.forEach(producto => { %> <!--es productosCarrito o carrito -->
                <article i class="detailProductList">
                    <section class="itemImg">
                        <img src="img/products/<%= producto.imagen %>" alt="">
                    </section>
                    <section class="detalle">
                        <h3><%= producto.nombre %>  </h3>
                        <p class="price">$<%= producto.precio %> </p>
                        <p class="discount"><%= producto.descuento %> </p>
                 
                        <!-- <div class="counter">
                            <span class="down" onClick='decreaseCount(event, this)'>-</span>
                            <input type="text" value="1">
                            <span class="up" onClick='increaseCount(event, this)'>+</span>
                        </div> -->
                    </section>
                    <section class="editar">
                        <form action="/carrito/delete/<%= product.id %>" method="POST" >
                            <button class="boton-editar"><i class="fa-regular fa-trash-can"></i></button>
                        </form>
                        <h4 id="valorProd">$ <%= producto.precio-(producto.precio * producto.descuento /100)  %> </h4>
                    </section>
                </article>               
            <% }) %>
        


        </div> */}