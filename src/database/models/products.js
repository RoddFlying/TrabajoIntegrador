const {sequelize,DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
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

    })
    return Product;
}

