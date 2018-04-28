angular

.module('minhasDiretivas', [])

.directive('meuPainel', function() {	
	var ddo = {};

	ddo.restrict = 'AE';

	ddo.scope = {
		titulo : 	'@',
		url : 		'@',
		exibir : 	'@'
	};
	
	ddo.transclude = true;
	
	ddo.templateUrl = 'directives/templates/meu-painel-template.html';
	
	return ddo;
});