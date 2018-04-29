angular

.module('angularAPP')

.service('angularPicService', function() {
	function consultarImagens() {
		var listaFotos = [];
		for (var i = 0; i < 100; i++) 
		{
			var foto = 
			{
				titulo : 'Leão '+i,
				idade : i,
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg',
				exibir : true
			};
			
			listaFotos.push(foto);
		}
		return listaFotos;
	}
	
	var service = {
		consultarImagens : consultarImagens
	};

	return service;
});