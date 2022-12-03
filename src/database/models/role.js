function roleData(sequelize, Datatypes){
    alias = 'role';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }
    config = {timestamps: false};
 const rol = sequelize.define(alias,cols,config)
 return rol
} 

module.exports = roleData;
