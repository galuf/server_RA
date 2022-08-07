const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Nota = db.define(
  "notas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    nota: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
  }
);

module.exports = Nota;
