'use strict';

module.exports = {
  // Executa operação no BD
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'techs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
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
      return queryInterface.dropTable('user_techs');
  }
};
