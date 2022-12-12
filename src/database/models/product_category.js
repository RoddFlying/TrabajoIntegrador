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
 const categoria_producto = sequelize.define(alias,cols,config);

 categoria_producto.associate = function (modelos){

    categoria_producto.hasMany(modelos.products, {
       as: "productos",
       foreignKey: "product_category_id"
        });
};

 return categoria_producto
} 

module.exports = product_categoryData;
