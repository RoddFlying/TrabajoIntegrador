function userData(sequelize, Datatypes){
    alias = 'user';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING(80),
            allowNull: false
        },
        surname: {
            type: Datatypes.STRING(80),
            allowNull: false
        },
        dni: {
            type: Datatypes.STRING(9)
        },
        email: {
            type: Datatypes.STRING(90)
        },
        password: {
            type: Datatypes.STRING(255)
        },
        address_street: {
            type: Datatypes.STRING(100)
        },
        address_extra: {
            type: Datatypes.STRING(100)
        },
        address_city: {
            type: Datatypes.STRING(100)
        },
        address_zipcode: {
            type: Datatypes.INTEGER
        },
        address_state: {
            type: Datatypes.STRING(100)
        },
        profile_image: {
            type: Datatypes.STRING(255)
        },
        telephone: {
            type: Datatypes.INTEGER
        },
        role_id: {
            type: Datatypes.INTEGER
        }
    }
    config = {timestamps: false, freezeTableName: true};
 const usuario = sequelize.define(alias,cols,config);

 usuario.associate = function (modelos){

    usuario.belongsTo(modelos.role, {   
       as: "rol",
       foreignKey: "role_id"
        });

    usuario.hasMany(modelos.sale, {
         as: "venta",
         foreignKey: "user_id"
        });
    };
  
 return usuario
} 
module.exports = userData;
