const { INTEGER } = require("sequelize");

function saleData(sequelize, Datatypes){
    alias = 'sale';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        user_id:{
            type: DataTypes.INTEGER
        },
        product_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        service_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        service_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
        },
        unit_amount:{
            type: DataTypes.DECIMAL(65,00),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        sale_detail_id: {
            type: DataTypes.DECIMAL(65,00),
            allowNull: false
        }
    }
    config = {timestamps: false};
 const venta = sequelize.define(alias,cols,config)
 return venta
} 

module.exports = saleData;
