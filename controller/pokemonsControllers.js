class pokemonController{
	constructor(formId){
		this.formEl = document.getElementById(formId);
	}

	onsubmit(){
		
	}

	getValues(){

		let pokemon = {};

		this.forEl.

		fields.forEach(function(field, index){
			if(field.checked){
				pokemon[field.name] = field.value;
			}else{
				pokemon[field.name] = field.value;
			}
		});

		return new Pokemon(
			pokemon.name,
			pokemon.gender,
			pokemon.birth,
			pokemon.country,
			pokemon.email,
			pokemon.password,
			pokemon.photo,
			pokemon.admin

		);

		return objectPokemon;
	}
}