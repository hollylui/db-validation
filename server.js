const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const pokedexRoute = require("./routes/pokedexRoute");

dotenv.config();
const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const app = express();

app.use(express.json());
app.use(cors());

const dbUrl = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbUrl)
  .then(() => console.log("It is connected to the database."))
  .catch((error) => console.log("Cannot connect to the db", error));

app.use("/pokedex", pokedexRoute);

app.listen(PORT, () => {
  console.log(`The server is listening.`);
});
