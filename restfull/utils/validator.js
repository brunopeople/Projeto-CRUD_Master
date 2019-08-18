module.exports ={
	pokemon:(app, req, res)=>{

		req.assert('name','O nome é obrigatorio.').notEmpty();
		req.assert('imagem','imagem não pode ser nula').notEmpty();
		req.assert('generation','Geração não pode ser nula').notEmpty();
		req.assert('stage', 'Especifique o estágio do pokemon').notEmpty();
		req.assert('type','Especifique o tipo do pokemon').notEmpty();

		
		
	
		let errors = req.validationErrors();

		if(errors){
			app.utils.error.send(errors,req,res);
			return false;
		} else {
			return true; 
		}

	}

};