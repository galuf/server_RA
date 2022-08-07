const { Sequelize } = require("sequelize");

const db = new Sequelize("titulos", "admin", "qwaser12", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = {
  db,
};
