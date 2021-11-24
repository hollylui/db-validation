const express = require("express");
const router = express.Router();
const PokedexModel = require("../models/PokedexModel");

//! sow all pokedexs ---------------------------------
router.get("/all", async (req, res) => {
  const allPokedex = await PokedexModel.find();
  return res.status(200).json(allPokedex);
});

//! Add new pokedex ---------------------------------
router.post("/new", async (req, res) => {
  const { body } = req;

  try {
    const newPokedex = await PokedexModel.create({ ...body });
    return res.status(200).json("This is added");
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

//! Find pokemon by name ---------------------------------
router.get("/name/:name", async (req, res) => {
  const findName = { "name.english": req.params.name };

  try {
    const namePokemon = await PokedexModel.findOne(findName);
    return res.status(200).json(namePokemon);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

//! Find pokemon by id ---------------------------------
router.get("/searchById/:id", async (req, res) => {
  const findId = req.params.id;
  const idPokemon = await PokedexModel.findById(findId);

  if (!idPokemon) {
    return res.status(404).json("No such ID.");
  }

  return res.status(200).json(idPokemon);
});

//! Find pokemon by type ---------------------------------
router.get("/type/:type", async (req, res) => {
  const findType = { type: req.params.type.toLowerCase() };
  const typePokemon = await PokedexModel.find(findType);

  if (!typePokemon) {
    return res.status(404).json("No such type.");
  }
  return res.status(200).json(typePokemon);
});

//! Find pokemon by type and language ---------------------------------
router.get("/name", async (req, res) => {
  const searchName = req.query.searchname;
  const language = "name." + req.query.language;
  const findName = { [language]: searchName };

  try {
    const namePokemon = await PokedexModel.findOne(findName);
    return res.status(200).json(namePokemon);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

module.exports = router;
