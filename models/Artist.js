const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Artist extends Model {}

Artist.init({
    fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biography: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    birthPlace: {
        type: DataTypes.STRING,
        field: 'birth_place',
        allowNull: false
    },
    averagePrice: {
        type: DataTypes.INTEGER,
        field: 'average_price',
        allowNull: false
    },
},{
    sequelize,
    modelName: 'artists',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id'] }
    }
});

Artist.associate = ( models ) => {
    Artist.hasMany(models.Picture);
};

module.exports = Artist;
