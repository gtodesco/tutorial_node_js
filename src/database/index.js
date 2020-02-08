const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

// yarn install mysql2
// yarn sequelize db:create

module.exports = connection;