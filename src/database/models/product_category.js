function product_categoryData(sequelize, Datatypes){
    alias = 'product_category';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }
    config = {timestamps: false};
 const categoria_producto = sequelize.define(alias,cols,config)
 return categoria_producto
} 

module.exports = product_categoryData;
