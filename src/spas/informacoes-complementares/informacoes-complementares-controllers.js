angular

.module('informacoesComplementaresControllers', ['informacoesComplementaresServices'])

.controller('informacoesComplementaresController', function(informacoesComplementaresService) {
	var vm = this;
	
	vm.isConsulta = true;
	
	/*
	 * Lists
	 * */
	vm.lista = [];
	
	/*
	 * Methods
	 * */
	vm.init = function(consulta) 
	{	
		vm.isConsulta = consulta;
		
		vm.lista = informacoesComplementaresService.gerarLista();
		
		vm.lista.forEach(function(itemLista) 
		{
			if(itemLista.tipo === 3 && itemLista.lista.length > 0)
			{
				itemLista.valor = itemLista.lista[0];
			}
		});
	};
	
	vm.replicarCampo = function(itemTela) 
	{		
		var novoItem = angular.copy(itemTela);
		novoItem.ordem += 1;
		novoItem.editavel = true;
		vm.lista.push(novoItem);

		itemTela.interativo = false;
		itemTela.editavel = false;
	};
	
	vm.incluirInformacoesComplementares = function() 
	{
		console.log('incluirInformacoesComplementares', vm.lista);
		
		vm.lista.forEach(function(itemLista){
			itemLista.editavel = false;
			itemLista.valueEditando = false;
			itemLista.labelEditando = false;
		});
		
		vm.isConsulta = true;
	};
	
	vm.cancelar = function() 
	{
		console.log('cancelando');
		vm.init();
	};
});