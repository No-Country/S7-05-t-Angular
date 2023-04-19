const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("./models");

require("dotenv").config();
const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "postgres",
    port: config.dbPort,
  }
);

// Realizar sincronización de modelos
// sequelize.sync({ force: false }) // Si force es true, se borrarán las tablas existentes y se crearán de nuevo
//     .then(() => {
//         console.log('Modelos sincronizados con la base de datos.');
//     })
//     .catch(err => {
//         console.error('Error al sincronizar modelos con la base de datos:', err);
//     });

setupModels(sequelize);
module.exports = sequelize;
