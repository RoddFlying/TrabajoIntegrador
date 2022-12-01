module.exports = (sequelize,dataType)=>{
    const alias = 'products';
    const cols = {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: dataType.STRING(100),
            allowNull: false
        },
        brand: {
            type: dataType.STRING(45),
            allowNull: true
        },
        detail: {
            type: dataType.STRING(10000),
            allowNull: true
        },
        price: {
            type: dataType.DECIMAL(65,00),
            allowNull: false
        },
        discount: {
            type: dataType.INTEGER(100),
            allowNull: true
        },
        image: {
            type: dataType.STRING(200),
            allowNull: false
        },
        expiration_date: {
            type: dataType.DATE,
            allowNull: true
        },
        creation_date: {
            type: dataType.DATE,
            allowNull: true
        },
        delete_date: {
            type: dataType.DATE,
            allowNull: true
        },
        product_Category_id: {
            type: dataType.INTEGER,
            allowNull: false
        },
        supplier_id: {
            type: dataType.INTEGER,
            allowNull: true
        }

    };
}