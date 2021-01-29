'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    subject: DataTypes.STRING,
    brief: DataTypes.TEXT,
    level: DataTypes.INTEGER,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    reserved_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};