require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST, //revisar si esta bien conectado a mamp
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT,
    "define": {
      "timeStamp": false,
      "createdAt": false,
      "freezeTableName": true,
      "camelCase": false,
      paranoid: true

    }
  }
  ,
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST, //revisar si esta bien conectado a mamp
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST, //revisar si esta bien conectado a mamp
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT
  }
}
