function serviceData(sequelize, Datatypes){
    alias = 'service';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: Datatypes.STRING(45),
            allowNull: false
        },
        detail: {
            type: Datatypes.STRING(10000),
            allowNull: false
        },
        price: {
            type: Datatypes.DECIMAL(65,00)
        },
        discount: {
            type: Datatypes.INTEGER,
            allowNull: true
        },
        time_date: {
            type: Datatypes.DATE,
            allowNull: false
        }
    }
    config = {timestamps: false};
 const serivicio= sequelize.define(alias,cols,config)
 return serivicio
} 

module.exports = serviceData;
