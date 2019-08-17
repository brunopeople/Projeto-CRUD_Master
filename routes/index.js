
module.exports = app => {


app.get('/', (req, res)=>{

	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.end('<h1>API PokemonGo</h1><p>API desenvolvida para o processo seletivo para a RedFox</p>');

	});
};
