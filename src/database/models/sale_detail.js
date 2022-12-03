function sale_detailData(sequelize, Datatypes){
    alias = 'sale_detail';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        date: {
            type: Datatypes.DATE,
        },
        total_amount:{
            type: Datatypes.DECIMAL(65,00)
        }
    }
    config = {timestamps: false};
 const detalle_venta = sequelize.define(alias,cols,config);

 detalle_venta.associate = function (modelos){

    detalle_venta.hasMany(modelos.sale, {
       as: "ventas",
       foreignKey: "sale_detail_id"
        });
};

 return detalle_venta
} 

module.exports = sale_detailData;
