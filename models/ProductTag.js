// Import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Fields and rules for ProductTag model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        id: 'id'
      }
    },
    tag_id : {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        id: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;