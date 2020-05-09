const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class OrderedItem extends Model {}

OrderedItem.init({
    pictureId: {
        type: DataTypes.INTEGER,
        field: 'picture_id',
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        field: 'order_id',
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'ordered_items',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id', 'picture_id', 'order_id'] }
    }
});

OrderedItem.associate = ( models ) => {
    // OrderedItem.hasOne(models.Picture);
    OrderedItem.belongsTo(models.Order);
};

module.exports = OrderedItem;
