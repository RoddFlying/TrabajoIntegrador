function payment_methodData(sequelize, Datatypes){
    alias = 'payment_method';
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
 const metodo_pago = sequelize.define(alias,cols,config);

 metodo_pago.associate = function (modelos){
    metodo_pago.hasMany(modelos.sale, {
       as: "venta",
       foreignKey: "payment_method_id"
       })
   };

 return metodo_pago;
} 

module.exports = payment_methodData;
