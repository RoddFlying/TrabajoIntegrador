const Swal = require('sweetalert2');

window.addEventListener("load", function () {

    let formulario = document.getElementById("addUserForm")

    let inputs = {
        name: document.getElementById('nombre'),
        surname: document.getElementById('apellido'),
        email: document.getElementById('email'),
        password: document.getElementById('contrasena1'), 
        address_street: document.getElementById('calle'),
        address_city: document.getElementById('ciudad'),
        address_state: document.getElementById('provincia'),
        address_zipcode: document.getElementById('codigoPostal'),
        profile_image: document.getElementById('filename')
    }

    formulario.addEventListener('submit', function(e) {
        let errores = [];   
        
        if (inputs.nombre.value == "") {
            errores.push('Debe introducir su nombre.')
        }

        if (inputs.apellido.value == "") {
            errores.push('Debe introducir su apellido.')
        }

        if (inputs.email.value == "") {
            errores.push('Debe introducir un email.')
        } else if (!inputs.email.value.includes("@")) {
            errores.push('Debe introducir una dirección de mail válida.')
        }

        if (inputs.password.value == "") {
            errores.push('Debe introducir una contraseña.')
        } else if (inputs.password.value.length < 6) {
            errores.push('La contraseña debe tener, como mínimo, 6 caracteres alfanuméricos.')
        }

        if (inputs.address_street.value == "") {
            errores.push("Debe introducir una calle.")
        }

        if (inputs.address_city.value == "") {
            errores.push("Debe introducir una ciudad.")
        }

        if (inputs.address_state.value == "") {
            errores.push("Debe introducir una provincia.")
        }

        if (inputs.address_zipcode.value == "") {
            errores.push("Debe introducir un código postal.")
        }

        if (inputs.profile_image.value == "") {
            errores.push("Debe introducir una imagen de perfil")
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
        // }else{
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'Usuario agregado exitosamente!',
        //         showConfirmButton: false,
        //         timer: 1500
        //       })
        }

    })

})