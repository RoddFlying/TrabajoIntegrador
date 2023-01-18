let a = document.getElementById("addProductForm2");

a.addEventListener("submit", function(ev){
    
    ev.preventDefault();

    let b = document.getElementById('name').value;
    if (b==""){
        alert('Completar el campo Nombre del producto');
        return;
    }

    let z = document.getElementById('brand').value;
    if (z==""){
        alert('Completar el campo Marca');
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

    let e = document.getElementById('creation_date').value;
    if (e==""){
        alert('Completar el campo Fecha de creación');
        return;
    }

    
    let f = document.getElementById('imagefile').value;
    if (f==""){
        alert('Completar el campo Imagen');
        return;
    }

    let g = document.getElementById('category').value;
    if (g==""){
        alert('Completar el campo Categoria');
        return;
    }

    let d = document.getElementById('detail').value;
    if (d==""){
        alert('Completar el campo Descripción');
        return;
    }


    a.submit()
})



// const Swal = require('sweetalert2');

// window.addEventListener("load", function () {

//     let formulario = document.getElementById("addProductForm2")

//     let inputs = {
//         name: document.getElementById('name'),
//         brand: document.getElementById('brand'),
//         detail: document.getElementById('detail'),
//         price: document.getElementById('productprice'),
//     }

//     formulario.addEventListener('submit', function(e) {
//         let errores = [];   
        
//         if (inputs.name.value == "") {
//             errores.push('Debe introducir el nombre del producto.')
//         }

//         if (inputs.brand.value == "") {
//             errores.push('Debe introducir la marca del producto.')
//         }

//         if (inputs.detail.value == "") {
//             errores.push("Debe introducir una brave descripción del producto.")
//         }

//         if (inputs.price.value == "") {
//             errores.push("Debe introducir el precio del producto.")
//         }

//         if (errores.length != 0) {
//             e.preventDefault();

//             let divAlert = document.getElementById("divAlert")

//             divAlert.classList.remove('displayNone')

//             let ulErrores = document.getElementById("errorList")

//             for (let i = 0; i < errores.length; i++) {
//                 ulErrores.innerHTML += `
//                     <li>${errores[i]}</li>
//               `
//             }
//         // }else{
//         //     Swal.fire({
//         //         position: 'top-end',
//         //         icon: 'success',
//         //         title: '¡Su producto fue cargado exitosamente!, por favor a la página de productos para poder visualizarlo.',
//         //         showConfirmButton: false,
//         //         timer: 1500
//         //       })
//         }

//     })

// })