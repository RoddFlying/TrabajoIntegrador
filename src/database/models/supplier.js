function supplierData(sequelize, Datatypes){
    alias = 'supplier';
        cols = {
        id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        name: {
            type: Datatypes.STRING(45),
            allowNull: false
        },
        telephone: {
            type: Datatypes.INTEGER
        },
        email: {
            type: Datatypes.STRING(80)
        }
    }
    config = {timestamps: false};
 const provedor = sequelize.define(alias,cols,config)

 provedor.associate = function (modelos){

    provedor.hasMany(modelos.products, {
       as: "productos",
       foreignKey: "supplier_id"
        });
};

 return provedor
} 

module.exports = supplierData;
