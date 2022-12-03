function serviceData(sequelize, Datatypes){
    alias = 'service';
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
        detail: {
            type: DataTypes.STRING(10000),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(65,00)
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        time_date: {
            type: DataTypes.DATETIME,
            allowNull: false
        }
    }
    config = {timestamps: false};
 const serivicio= sequelize.define(alias,cols,config)
 return serivicio
} 

module.exports = serviceData;
