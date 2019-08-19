const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//carregar rotas
const indexRoute = require('./routes/index-route');
const pokemonRoute = require('./routes/pokemon-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));



app.use('/', indexRoute);
app.use('/pokemons' , pokemonRoute);


module.exports = app;
