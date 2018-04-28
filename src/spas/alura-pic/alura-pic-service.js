angular

.module('angularAPP')

.service('angularPicService', function() {
	function consultarImagens() {
		return [ {
			titulo : 'Leão 1',
			url : 'http://www.fundosanimais.com/Minis/leoes.jpg',
			exibir : false
		}, {
			titulo : 'Leão 2',
			url : 'http://www.fundosanimais.com/Minis/leoes.jpg',
			exibir : false
		}, {
			titulo : 'Leão 3',
			url : 'http://www.fundosanimais.com/Minis/leoes.jpg',
			exibir : false
		} ];
	}
	
	var service = {
		consultarImagens : consultarImagens
	};

	return service;
});