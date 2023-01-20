function cart_itemData(sequelize, Datatypes){
    alias = 'cart_item';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        product_name: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        product_price: {
            type: Datatypes.DECIMAL(10,2),
            allowNull: false
        },
        product_discount: {
            type: Datatypes.INTEGER(100),
            allowNull: true
        },
        product_image: {
            type: Datatypes.STRING(1000),
            allowNull: true
        },
        product_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    }
    config = {timestamps: false};
    const item_carrito = sequelize.define(alias,cols,config);

    item_carrito.associate = function (modelos){

        
    item_carrito.belongsTo(modelos.products, {
    as: "productos",
    foreignKey: "product_id"
    });

    };
    return item_carrito;

   };

module.exports = cart_itemData;
