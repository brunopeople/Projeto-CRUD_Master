module.exports ={
	pokemon:(app, req, res)=>{
		req.assert('name','O nome é obrigatorio.').notEmpty();
		req.assert('tipo','O tipo está invalido.').notEmpty().isEmail();
	
		let errors = req.validationErrors();

		if(errors){
			app.utils.error.send(errors,req,res);
			return false;
		} else {
			return true; 
		}

	}

};