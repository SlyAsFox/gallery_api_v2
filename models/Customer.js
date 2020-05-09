const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Customer extends Model {}

Customer.init({
    fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    sequelize,
    modelName: 'customers',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id'] }
    }
});

Customer.associate = ( models ) => {
    Customer.hasMany(models.Order);
    Customer.hasMany(models.Payment);
};

module.exports = Customer;
