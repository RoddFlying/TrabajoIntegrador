function supplierData(sequelize, Datatypes){
    alias = 'supplier';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        telephone: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING(80)
        }
    }
    config = {timestamps: false};
 const provedor = sequelize.define(alias,cols,config)
 return provedor
} 

module.exports = supplierData;
