// Import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize Tag model by extending Sequelize's Model class
class Tag extends Model {}

// Fields and rules for Tag model
Tag.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true, 
    }, 
    tag_name: { 
        type: DataTypes.STRING,
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;