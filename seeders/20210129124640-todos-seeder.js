'use strict';
const todos = require('../misc/data.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', todos.map(todo => {
      const revisedTodo = {
        ...todo,
        id: todo.to_do_id,
        createdAt: todo.modified_time,
        updatedAt: todo.modified_time
      }
      delete revisedTodo.to_do_id
      delete revisedTodo.modified_time
      return revisedTodo
    }), {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {})
  }
};
