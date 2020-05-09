const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Payment extends Model {}

Payment.init({
    creditCard: {
        type: DataTypes.STRING,
        field: 'credit_card',
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        field: 'order_id',
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false
    },
},{
    sequelize,
    modelName: 'payments',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id', 'order_id', 'customer_id'] }
    }
});

Payment.associate = ( models ) => {
    Payment.belongsTo(models.Customer);
};

module.exports = Payment;
