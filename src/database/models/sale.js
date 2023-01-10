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
        payment_method_id: {
            type: Datatypes.INTEGER,
        },
        unit_amount:{
            type: Datatypes.DECIMAL(10,2),
            allowNull: false
        },
        quantity: {
            type: Datatypes.INTEGER
        },
        sale_detail_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    }
    config = {timestamps: false};
 const venta = sequelize.define(alias,cols,config);

 venta.associate = function (modelos){

    venta.belongsTo(modelos.user, {   
       as: "usuario",
       foreignKey: "user_id"
        });
    venta.belongsTo(modelos.products, {   
        as: "productos",
        foreignKey: "product_id"
        });
    venta.belongsTo(modelos.payment_method, {   
        as: "metodo_pago",
        foreignKey: "payment_method_id"
        });
    venta.belongsTo(modelos.sale_detail, {   
        as: "detalle_venta",
        foreignKey: "sale_detail_id"
        });
    };


 return venta
} 

module.exports = saleData;
