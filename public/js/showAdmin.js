const db = require('../database/models');

let div1 = document.getElementById('funcionesAdmin');



    if (db.role_id =='1'){
        document.getElementById('funcionesAdmin').style.display = block;
    } else {
        document.getElementById('funcionesAdmin').style.display = none;
    }
    


