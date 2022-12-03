function roleData(sequelize, Datatypes){
    alias = 'role';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: Datatypes.STRING(45),
            allowNull: false
        }
    }
    config = {timestamps: false};
 const rol = sequelize.define(alias,cols,config);

 rol.associate = function (modelos){

    rol.hasMany(modelos.user, {
       as: "usuario",
       foreignKey: "role_id"
        });
};

 return rol
} 

module.exports = roleData;
