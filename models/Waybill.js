const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Waybill extends Model {}

Waybill.init({
    orderId: {
        type: DataTypes.INTEGER,
        field: 'order_id',
        allowNull: false
    },
    paymentId: {
        type: DataTypes.INTEGER,
        field: 'payment_id',
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deliveryAddress: {
        type: DataTypes.STRING,
        field: 'delivery_address',
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'waybills',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id', 'order_id', 'payment_id'] }
    }
});

Waybill.associate = ( models ) => {
    // Waybill.hasOne(models.Payment);
    Waybill.hasOne(models.Order);
    // Waybill.hasOne(models.Delivery);

};

module.exports = Waybill;
