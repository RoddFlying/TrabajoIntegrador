module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "growshop",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


// const mysql = require('mysql')

// const connection = mysql.createConnection({  
//   host: 'mysql-cuchujero.alwaysdata.net',  
//   user: 'cuchujero',  
//   password: 'Goku123!',  
//   database: 'cuchujero_okp'
// });

// connection.connect((err) => {  if (err) throw err;  console.log('Conectado!');});

// module.exports = connection;