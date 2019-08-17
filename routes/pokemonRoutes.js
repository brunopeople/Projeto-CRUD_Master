let NeDB = require('nedb');
let db = new NeDB({

	filename: 'pokemonDB',
	autoload: true
});

module.exports = app => {
	let route = app.route('/pokemonRoutes');

	route.get((req, res) => {
		db.find({}).sort({name:1}).exec((err,pokemons)=>{

			if(err){
				app.utils.error.send(err,req,res);
			} else {

				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json({
					pokemons
				});
			}
		});
	});


	route.post((req,res)=>{
		if(!app.utils.validator.pokemon(app, req, res)) return false;
		
		db.insert(req.body,(err,pokemons)=>{
			if(err){
				app.utils.error.send(err,req,res);
			} else {
				res.status(200).json(pokemons);
			}
		});
	});

	let routeId = app.route('/pokemonRoutes/:id');
	routeId.get((req, res)=>{
		db.findOne({_id:req.params.id}).exec((err,user)=>{
			if(err){
				app.utils.error.send(err,req,res);
			} else {
				res.status(200).json(pokemons);
			}
		});
	});


	routeId.put((req,res)=>{
		if(!app.utils.validator.user(app,req,res)) return false;
		db.update({_id: req.params.id}, req.body, err =>{
			if(err){
				app.utils.error.send(err,req,res);
			} else {
				res.status(200).json(Object.assign(req.params, req.body));
			}
		});
	});


	routeId.delete((req, res)=>{
		db.remove({_id: req.params.id},{}, err=>{
			if(err){
				app.utils.error.send(err,req,res);
			}else {
				res.status(200).json(req.params);
			}
		});
	});
};

	
