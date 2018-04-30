angular

.module('minhasDiretivas', [])

.directive('listaDeFotos', function() {
	  return {
		    restrict: 'E',
		    scope: { 
		    	item : '=', 
		    	click : '&' 
		    },
		    templateUrl: 'resources/directives/templates/listagem-tpl.html'
	  };
})

.directive('informacaoComplementar', function() {
	return {
		restrict: 'AE',
		scope: {
			item : '=',
			replicar : '&',
			consulta : '='
		},
		link: function(scope, element, attrs) {
			element.bind('keydown keypress', function (event) {
				scope.$apply(function (){
					if(event.keyCode === 13)
					{
						if(scope.item.labelEditando){
							scope.item.labelEditando = false;
						}
						else if(scope.item.valueEditando){
							scope.item.valueEditando = false;
						}						
					}
				});
			});
		},
		templateUrl: 'resources/directives/templates/informacao-complementar-tpl.html'
	};
});