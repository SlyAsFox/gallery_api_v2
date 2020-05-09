const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Delivery extends Model {}

Delivery.init({
    startDate: {
        type: DataTypes.DATE,
        field: 'start_date',
        allowNull: false
    },
    finishDate: {
        type: DataTypes.DATE,
        field: 'finish_date',
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courierId: {
        type: DataTypes.INTEGER,
        field: 'courier_id',
        allowNull: false
    },
    waybillId: {
        type: DataTypes.INTEGER,
        field: 'waybill_id',
        allowNull: false
    },
},{
    sequelize,
    modelName: 'deliveries',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id', 'courierId', 'waybillId'] }
    }
});

Delivery.associate = ( models ) => {
    Delivery.belongsTo(models.Courier);

    // Delivery.hasOne(models.Waybill);
};

module.exports = Delivery;
