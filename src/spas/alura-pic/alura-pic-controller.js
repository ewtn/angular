angular

.module('angularAPP')

.controller('aluraPicController', function(angularPicService) 
{
	var vm = this;
	
	vm.fotos = [];
	vm.fotosBackup = [];
	
	vm.filtro = '';
	
	
	vm.init = function () 
	{
		vm.fotosBackup = angularPicService.consultarImagens();
		vm.fotos = vm.fotosBackup;
	};		

	vm.mostrar = function (index) 
	{
		vm.fotos[index].exibir = vm.fotos[index].exibir ? false : true;
	};
	

});