const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;

// yarn init -y

// yarn install mysql2
// yarn sequelize db:create

// yarn sequelize migration:create --name=create-users
// yarn sequelize db:migrate
// yarn sequelize db:migrate:undo