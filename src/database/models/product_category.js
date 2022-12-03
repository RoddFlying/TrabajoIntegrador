function product_categoryData(sequelize, Datatypes){
    alias = 'product_category';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: Datatypes.STRING(45),
            allowNull: false
        }
    }
    config = {timestamps: false};
 const categoria_producto = sequelize.define(alias,cols,config)
 return categoria_producto
} 

module.exports = product_categoryData;
