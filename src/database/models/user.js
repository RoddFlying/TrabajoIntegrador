function userData(sequelize, Datatypes){
    alias = 'user';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(9)
        },
        email: {
            type: DataTypes.STRING(90)
        },
        password: {
            type: DataTypes.STRING(20)
        },
        address: {
            type: DataTypes.STRING(100)
        },
        profile_image: {
            type: DataTypes.STRING(100)
        },
        telephone: {
            type: DataTypes.INTEGER
        },
        role_id: {
            type: DataTypes.INTEGER
        }
    }
    config = {timestamps: false};
 const usuario = sequelize.define(alias,cols,config)
 return usuario
} 

module.exports = userData;
