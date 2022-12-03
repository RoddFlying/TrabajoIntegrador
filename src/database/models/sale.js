const { INTEGER } = require("sequelize");

function saleData(sequelize, Datatypes){
    alias = 'sale';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        user_id:{
            type: Datatypes.INTEGER
        },
        product_id:{
            type: Datatypes.INTEGER,
            allowNull: true
        },
        service_id:{
            type: Datatypes.INTEGER,
            allowNull: true
        },
        service_id:{
            type: Datatypes.INTEGER,
            allowNull: true
        },
        payment_method_id: {
            type: Datatypes.INTEGER,
        },
        unit_amount:{
            type: Datatypes.DECIMAL(65,00),
            allowNull: false
        },
        quantity: {
            type: Datatypes.INTEGER
        },
        sale_detail_id: {
            type: Datatypes.DECIMAL(65,00),
            allowNull: false
        }
    }
    config = {timestamps: false};
 const venta = sequelize.define(alias,cols,config)
 return venta
} 

module.exports = saleData;
