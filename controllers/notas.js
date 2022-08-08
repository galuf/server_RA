const { response } = require("express");
const conexion = require("../database/config");
const Nota = require("../models/nota");

const postNotas = async (req, res = response) => {
	
	const { name, point } = req.body;
  	console.log('points: ', point );
  	try {

    //Generar la data a guardar
    const data = {
      usuario: name,
      nota: point
    };

    const nota = new Nota(data);

    //Guardar DB
    await nota.save();

    res.status(201).json(nota);
  
  } catch (err) {
    console.log(err);
    return res.status(500).json({
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
