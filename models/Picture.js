const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Picture extends Model {}

Picture.init({
    artistId: {
        type: DataTypes.INTEGER,
        field: 'artist_id',
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

},{
    sequelize,
    modelName: 'pictures',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id', 'artist_id'] }
    }
});

Picture.associate = ( models ) => {
    Picture.belongsTo(models.Artist);
};

module.exports = Picture;
