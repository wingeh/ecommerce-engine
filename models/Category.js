// Import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize Category model by extending Sequelize's Model class
class Category extends Model {}

// Fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;