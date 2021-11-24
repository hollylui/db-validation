const { Schema, model } = require("mongoose");

// name ------------------------------------------
const nameSchema = new Schema({
  english: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 24,
  },
  japanese: { type: String, minLength: 3, maxLength: 24 },
  chinese: { type: String, minLength: 3, maxLength: 24 },
  french: { type: String, minLength: 3, maxLength: 24 },
});

// type -----------------------------------------
const typeSchemaPattern = {
  type: String,
  enum: [
    "grass",
    "poison",
    "fire",
    "flying",
    "water",
    "bug",
    "normal",
    "electric",
    "ground",
    "fairy",
    "fighting",
    "psychic",
    "rock",
    "steel",
    "ice",
    "ghost",
    "dragon",
    "dark",
  ],
};

// base --------------------------------------------
const baseSchema = new Schema({
  HP: { type: Number, min: 1, default: 1 },
  Attack: { type: Number, min: 0, default: 1 },
  Defense: { type: Number, min: 0, default: 1 },
  "Sp. Attack": { type: Number, min: 0, default: 0 },
  "Sp. Defense": { type: Number, min: 0, default: 0 },
  Speed: { type: Number, min: 0, default: 1 },
});

const PokedexSchema = new Schema({
  name: nameSchema,
  type: [typeSchemaPattern],
  base: baseSchema,
});

const PokedexModel = model("pokedexs", PokedexSchema);
module.exports = PokedexModel;
