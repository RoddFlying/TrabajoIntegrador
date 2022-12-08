require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST, //revisar si esta bien conectado a mamp
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT
  }
  //,
  // "test": {
  //   "username": "mauchisss",
  //   "password": "Frida2020",
  //   "database": "database_test",
  //   "host": "mysql-mauchisss.alwaysdata.net",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "mauchisss",
  //   "password": "Frida2020",
  //   "database": "database_production",
  //   "host": "mysql-mauchisss.alwaysdata.net",
  //   "dialect": "mysql"
  // }
}
