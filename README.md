# Validating Data

This assignment will have you writing a schema with validation

> Difficulty level: Beginner 🫖 🍵

## Keywords

`request parameters`, `query parameters`, `schemas`, `mongoose validation`, `routes`, `endpoints`, `subdocuments`, `nested paths`

## What you will be doing

For this assignment you will have to:

1. Upload the `pokedex` dataset to your database
2. Create a schema for the `pokedex` database
3. Adding validation to the schema
4. Create an API for accessing the `pokedex` database

This project assumes you've already had experience with:

- Express.js
- dotenv
- Setting up routes / endpoints
- Mongoose / MongoDB (schemas, models, `find()` and `create()`)
- Mongoose schema validation
- Schema subdocuments

## Tasks

Before starting these tasks, run the command `npm install` or `npm i`

## Task 1 - Importing the pokedex data

1. Inside your MongoDB server, create a new database `db-validation`
2. Inside this database, create a new collection called `pokedex`
3. Upload the `pokedex.json` dataset into your `pokedex` collection

## Task 2 - Setting up the .env file

1. Using the `.env.example` file as a template, create a `.env` file
2. Add your database connection details to your `.env` file 
3. The key `DB_NAME` points to the name of the database you want to connect to. Use the name `db-validation`. This will ensure that Mongoose will try and use the existing sample dataset you previously set up
4. For the other keys, fill in the details as provided to you by your MongoDB service.
5. The key `DB_HOST` is the domain of the MongoDB service you will connect to

## Task 3 - Connecting your server to your database

1. Using the `mongoose.connect()` method, setup the connection to your server inside `server.js`
2. `mongoose.connect()` returns a promise
   - use the `then()` method to display a message saying the connection was successful
   - use the `catch()` method to display a message saying the connection failed
3. Check that your database can connect

> Here is an example of you how might setup your connection string,
> once you have destructured the properties from `process.env`

> `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

## Task 4 - Schema

1. Analyse the data in the `pokedex.json` file
2. Write a schema for this. Use an appropriate name.

> Hint: Some values maybe held inside an array, for example a string of arrays would be represented as `[String]`

> Hint: For some data you may need to use subdocuments

## Task 5 - Schema validation

For this task you will be adding validation to your schema

Add validation to your schema based on the following criteria:

1. `name` > `english` should be required
2. `name` > `all languages` should have a minimum character count of 3
3. `name` > `all languages` should have a maximum character count of 24
4. `base` > `HP` can not be less than 1 and should default to 1
5. `base` > `Attack` can not be less than 0 and should default to 1
6. `base` > `Defense` can not be less than 0 and should default to 1
7. `base` > `Sp. Attack` can not be less than 0 and should default to 0
8. `base` > `Sp. Defense` can not be less than 0 and should default to 0
9. `base` > `Speed` can not be less than 0 and should default to 1

## Task 6 - Schema validation with enum

For this task you will be adding enum validation to your schema

1. For `type`, use an `enum` with the following strings;

```text
'grass',    'poison',
'fire',     'flying',
'water',    'bug',
'normal',   'electric',
'ground',   'fairy',
'fighting', 'psychic',
'rock',     'steel',
'ice',      'ghost',
'dragon',   'dark'
```

## Task 7 - Model

1. Write a model for your schema
2. Export your model

## Task 8 - Setting up the route

Our database may end up having more than one collection, or our business logic may become quite complex. We can imagine that if we were to fully develop our application, it could get quite big.

Let's try and keep things organised from the start.

Create a route `pokedex` with the path `/pokedex`

1. Create the file `pokedex.js` in the folder `routes`
   - import `express`
   - create the `router` instance from `express.Router()`
   - export your `router` instance

2. Import your route into `server.js`
   - Use `app.use()` to use the pokedex router you imported
   - Use the path `/pokedex`

## Task 9 - Creating an endpoint - get all pokemon

We will create an endpoint to load all pokemons

1. Create an endpoint with the path `/all`. This will be a `GET` endpoint.

2. Use the endpoint to interact with the model you created in Task 7 to find all the pokemons in the collection

3. Return the results to the client

## Task 10 - Creating an endpoint - Create a new pokemon

We will create an endpoint to create a new pokemon

1. Create an endpoint with the path `/new`. This will be a `POST` endpoint. The endpoint should expect a request body object from the client, with all the details required to create a new pokemon

2. Use the endpoint to interact with the model you created in Task 7

3. Read the JSON from the body of the `request` object and use that to **create** a new pokemon in your collection

> Hint: You can access the request body from the **request** object with the `body` property

4. If the creation of the new pokemon was successful, return a success message to the client

5. If the creation of the new pokemon was **not** successful, return a failure message to the client

## Task 11 - Test your endpoints

1. Use an API testing tool to check that your endpoints work correctly
2. Create some new pokemon. Here are some names to inspire you:

```text
Pandaraff
Pogosnoff
Snakerake
Snufflestuff
```

## Task 12 - Creating an endpoint - search for pokemon by name

We will create an endpoint to load a specific pokemon, based on the `name`

1. Create an endpoint with the path `/name`. This will be a `GET` endpoint. The endpoint should expect a request parameter from the client, the pokemon `name`.

2. Use the endpoint to interact with the model you created in Task 7 to find the pokemon by `name`. For now, default to the **english** version of the name, then:
   - If found, return a status of `200` and the resulting movie
   - If not found, return a status of `404` and an appropriate message

> Hint: You might want to use a request parameter

> Hint: You can access parameters from the **request** object with the `params` property

## Task 13 - Creating an endpoint - search for pokemon by id

We will create an endpoint to load a specific pokemon, based on the `_id` field

1. Create an endpoint with the path `/searchById`. This will be a `GET` endpoint. The endpoint should expect a request parameter from the client, the pokemon `id`.

2. Import and use your model from Task 7 to find the pokemon by `id`, then:
   - If found, return a status of `200` and the resulting movie
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findById()`

## Task 14 - Creating an endpoint - search for pokemon by type

We will create an endpoint to load all pokemons of a specific type

1. Create an endpoint with the path `/type`. This will be a `GET` endpoint. The endpoint should expect a request parameter from the client, the pokemon `type`.

2. Use the endpoint to interact with the model you created in Task 7

3. Search for the pokemon based on the **type** supplied by the client

4. Return the result to the client

> Hint: You might want to normalize the input (make it lowercase) so that it matches the data in the collection

## Task 15 - Modifying an endpoint - search for pokemon by name and language

1. Modify the endpoint you created in Task 12

2. Using a `query` parameter, allow the user to change the language of the search

> Example: If the user attaches the query `?language=japanese` then search for the japanese version of the name

> Hint: You can access query parameters from the **request** object with the `query` property
