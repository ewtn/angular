angular

.module('minhasDiretivas', [])

.directive('listaDeFotos', function() {
	  return {
		    restrict: 'E',
		    scope: { 
		    	item : '=', 
		    	click : '&' 
		    },
		    templateUrl: 'resources/directives/templates/listagem-template.html'
	  };
});