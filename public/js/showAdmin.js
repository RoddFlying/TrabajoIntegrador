const db = require('../database/models');


    if (db.user.role_id == 1){
        document.getElementById('funcionesAdmin').style.display = "block";
    } else {
        document.getElementById('funcionesAdmin').style.display = "none";
    }
    


