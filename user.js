// // 1. guardar al usuario en db
// // 2. buscar al usuario que se quiere logear por su mail
// // 3. buscar a un usuario por su ID
// // 4. EDITAR LA INFO DE USUARIO
// // 5- eliminar a un usuario ed la db

// const fs = require ('fs');

// const user = {
//     fileName: './src/database/users.json',

//     getData: function () {
//         return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
//     },
//     generateId: function(){
//         let allUsers = this.findAll();
//         let lastUser = allUsers.pop();
//         if (lastUser){
//             return lastUser.id +1;
//         }
//         return 1;
//     },

//     findAll: function() {
//         return this.getData();
//     },

//     findByPk: function (id) {
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser.id === id);
//         return userFound;
//     },

//     findByField: function (field, text) {
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser[field] === text);
//         return userFound;
//     },

//     create: function (userData) {
//         let allUsers = this.findAll();
//         let newUser = {
//             id: this.generateId(),
//             ...userData
//         }
//         allUsers.push(newUser);
//         fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null, ' '));
//         return newUser;
//     },

//     delete: function(id){
//         let allUsers = this.findAll();
//         let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
//         fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null, ' '));
//         return true;
//     }

// }

// module.exports = user;

// //console.log(user.delete(4));