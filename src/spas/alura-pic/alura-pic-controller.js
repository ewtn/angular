angular

.module('angularAPP')

.controller('aluraPicController', function(angularPicService) {
	var vm = this;
	
	vm.fotos = angularPicService.consultarImagens();

	vm.ocultar = function (index) {
		vm.fotos[index].exibir = vm.fotos[index].exibir ? false : true;
	};

});