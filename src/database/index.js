const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;

// yarn init -y

// yarn install mysql2
// yarn sequelize db:create

// yarn sequelize migration:create --name=create-users
// yarn sequelize db:migrate
// yarn sequelize db:migrate:undo