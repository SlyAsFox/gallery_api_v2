const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Courier extends Model {}

Courier.init({
    fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    sequelize,
    modelName: 'couriers',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id'] }
    }
});

Courier.associate = ( models ) => {
    Courier.hasMany(models.Delivery)
};

module.exports = Courier;
