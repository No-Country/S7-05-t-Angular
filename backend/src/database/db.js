const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
require('dotenv').config()

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    dialect: 'postgres',
    port: config.dbPort,
});

module.exports = sequelize;
