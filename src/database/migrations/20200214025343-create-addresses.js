'use strict';

module.exports = {
  // Executa operação no BD
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER, // https://sequelize.org/v5/manual/data-types.html
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', // SET NULL -> deixa o endereço 'flutuando' sem código, RESTRICT -> não permite
        onDelete: 'CASCADE',
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
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
      return queryInterface.dropTable('addresses');
  }
};
