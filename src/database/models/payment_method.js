function payment_methodData(sequelize, Datatypes){
    alias = 'payment_method';
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
 const metodo_pago = sequelize.define(alias,cols,config)
 return metodo_pago;
} 

module.exports = payment_methodData;
