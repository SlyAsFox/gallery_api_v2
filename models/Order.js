const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Order extends Model {}

Order.init({
    customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false
    },
    waybillId: {
        type: DataTypes.INTEGER,
        field: 'waybill_id',
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
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
    modelName: 'orders',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id', 'customer_id', 'waybill_id'] }
    }
});

Order.associate = ( models ) => {
    Order.belongsTo(models.Customer);
    Order.hasOne(models.Waybill);
    Order.hasMany(models.OrderedItem);
};

module.exports = Order;
