const { response } = require("express");
const conexion = require("../database/config");
const Nota = require("../models/nota");

const postNotas = async (req, res = response) => {
  const { body } = req;

  try {
    //change with your last advance
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const getNotas = async (req, res) => {
  const usuarios = await Nota.findAll();
  res.json({ usuarios });
};

module.exports = {
  getNotas,
  postNotas,
};
