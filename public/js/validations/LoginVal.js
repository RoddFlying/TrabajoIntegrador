let DD = document.getElementById("loginform");

a.addEventListener("submit", function(ev){
    
    ev.preventDefault();

    let b = document.getElementById('emailinput').value;
    if (b==null){
        alert('Completar el campo Email');
        return;
    }

    let c = document.getElementById('password123').value;
    if (c==null){
        alert('Completar el campo Contraseña');
        return;
    }

    a.submit()
})