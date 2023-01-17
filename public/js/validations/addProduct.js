const Swal = require('sweetalert2');

window.addEventListener("load", function () {

    let formulario = document.getElementById("addProductForm")

    let inputs = {
        name: document.getElementById('name'),
        brand: document.getElementById('brand'),
        detail: document.getElementById('detail'),
        price: document.getElementById('productprice'),
    }

    formulario.addEventListener('submit', function(e) {
        let errores = [];   
        
        if (inputs.name.value == "") {
            errores.push('Debe introducir el nombre del producto.')
        }

        if (inputs.brand.value == "") {
            errores.push('Debe introducir la marca del producto.')
        }

        if (inputs.detail.value == "") {
            errores.push("Debe introducir una brave descripción del producto.")
        }

        if (inputs.price.value == "") {
            errores.push("Debe introducir el precio del producto.")
        }

        if (errores.length != 0) {
            e.preventDefault();

            let divAlert = document.getElementById("divAlert")

            divAlert.classList.remove('displayNone')

            let ulErrores = document.getElementById("errorList")

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `
                    <li>${errores[i]}</li>
              `
            }
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Su producto fue cargado exitosamente!, por favor a la página de productos para poder visualizarlo.',
                showConfirmButton: false,
                timer: 1500
              })
        }

    })

})