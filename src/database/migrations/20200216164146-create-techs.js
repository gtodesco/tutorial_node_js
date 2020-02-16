'use strict';

module.exports = {
  // Executa operação no BD
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: { // Os campos created_at e updated_at são preenchidos automaticamente, mas é necessário criá-los aqui
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  // Defaz alterações caso aconteça algo errado na operação com o BD
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('techs');
  }
};
