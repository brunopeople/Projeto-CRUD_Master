
const express = require('express');
let routesIndex = require('./routes/index');
let routesPokemons = require('./routes/pokemonRoutes');
let app = express();

app.use(routersIndex);
app.use('/pokemons', routesPokemons);

	app.listen(3000, '127.0.0.1',()=>{
		console.log('servidor está rodando!!');
	});