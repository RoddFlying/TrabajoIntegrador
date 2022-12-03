function productsData(sequelize, Datatypes){
    alias = 'products';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        brand: {
            type: Datatypes.STRING(45),
            allowNull: true
        },
        detail: {
            type: Datatypes.STRING(10000),
            allowNull: true
        },
        price: {
            type: Datatypes.DECIMAL(65,00),
            allowNull: false
        },
        discount: {
            type: Datatypes.INTEGER(100),
            allowNull: true
        },
        image: {
            type: Datatypes.STRING(200),
            allowNull: false
        },
        expiration_date: {
            type: Datatypes.DATE,
            allowNull: true
        },
        creation_date: {
            type: Datatypes.DATE,
            allowNull: true
        },
        delete_date: {
            type: Datatypes.DATE,
            allowNull: true
        },
        product_Category_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        supplier_id: {
            type: Datatypes.INTEGER,
            allowNull: true
        }
    }
    config = {timestamps: false};
 const productos = sequelize.define(alias,cols,config)
 return productos;
} 

module.exports = productsData;
