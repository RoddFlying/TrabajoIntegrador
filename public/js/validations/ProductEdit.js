let a = document.getElementById("editprod");

a.addEventListener("submit", function(ev){
    
    ev.preventDefault();

    let b = document.getElementById('name').value;
    if (b==""){
        alert('Completar el campo Nombre del producto');
        return;
    }

    let c = document.getElementById('price').value;
    if (c==""){
        alert('Completar el campo Precio');
        return;
    }
    
    let r = document.getElementById('discount').value;
    if (r==""){
        alert('Completar el campo Descuento');
        return;
    }

    let g = document.getElementById('category').value;
    if (g==""){
        alert('Completar el campo Categoria');
        return;
    }

    let f = document.getElementById('imagefile').value;
    if (f==""){
        alert('Completar el campo Imagen');
        return;
    }
     
    let d = document.getElementById('detail').value;
    if (d==""){
        alert('Completar el campo Descripción');
        return;
    }
    
    let z = document.getElementById('brand').value;
    if (z==""){
        alert('Completar el campo Marca');
        return;
    }    

    let e = document.getElementById('creation_date').value;
    if (e==""){
        alert('Completar el campo Fecha de creación');
        return;
    }
    
    a.submit()
})
