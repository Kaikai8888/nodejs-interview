'use strict';
const todos = require('../misc/data.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', todos.map(todo => ({
      ...todo,
      createdAt: todo.modified_time
    })), {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {})
  }
};
