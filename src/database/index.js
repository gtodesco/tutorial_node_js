const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;

// yarn init -y

// yarn install mysql2
// yarn sequelize db:create

// yarn sequelize migration:create --name=create-users
// yarn sequelize db:migrate
// yarn sequelize db:migrate:undo