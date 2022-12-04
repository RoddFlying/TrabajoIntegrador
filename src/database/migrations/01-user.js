// 'use strict';

// module.exports = { 
//     up: async (QueryInterface, Sequelize) => {
//     return QueryInterface.createTable('user', {
//         id:{
//             type: Datatypes.INTEGER,
//             primaryKey: true,
//             autoIncremental: true
//         },
//         name: {
//             type: Datatypes.STRING(80),
//             allowNull: false
//         },
//         surname: {
//             type: Datatypes.STRING(80),
//             allowNull: false
//         },
//         dni: {
//             type: Datatypes.STRING(9)
//         },
//         email: {
//             type: Datatypes.STRING(90)
//         },
//         password: {
//             type: Datatypes.STRING(20)
//         },
//         address: {
//             type: Datatypes.STRING(100)
//         },
//         profile_image: {
//             type: Datatypes.STRING(100)
//         },
//         telephone: {
//             type: Datatypes.INTEGER
//         },
//         role_id: {
//             type: Datatypes.INTEGER
//         }
//     })
   
// } ,
// down: async (QueryInterface, Sequelize) => {
//     return QueryInterface.dropTable('user')
// }
// };
