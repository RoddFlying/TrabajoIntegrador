function sale_detailData(sequelize, Datatypes){
    alias = 'sale_detail';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        date: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        total_amount:{
            type: DataTypes.DECIMAL(65,00)
        }
    }
    config = {timestamps: false};
 const detalle_venta = sequelize.define(alias,cols,config)
 return detalle_venta
} 

module.exports = sale_detailData;
