function productsData(sequelize, Datatypes){
    alias = 'products';
        cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        detail: {
            type: DataTypes.STRING(10000),
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(65,00),
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER(100),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        delete_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        product_Category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        supplier_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
    config = {timestamps: false};
 const productos = sequelize.define(alias,cols,config)
 return productos;
} 

module.exports = productsData;
