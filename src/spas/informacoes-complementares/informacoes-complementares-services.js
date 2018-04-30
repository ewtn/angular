angular

.module('informacoesComplementaresServices', [])

.service('informacoesComplementaresService', function() 
{
	function gerarLista() 
	{
		var lista = [];
		
		var obj = 
		{
			label 			: 'Registro Geral',
			tipo 			: 1,
			valor			: '2.256.881',
			interativo		: true,
			editavel		: false,
			ordem			: 0
		};
		
		lista.push(obj);
		
		obj = 
		{
			label 			: 'Data de Inclusão',
			tipo 			: 2,
			valor			: '10.01.2018',
			interativo		: true,
			editavel		: false,
			ordem			: 1
		};
		
		lista.push(obj);
		
		obj = 
		{
			label 			: 'Cliente',
			tipo 			: 3,
			lista			: [
				{cpf: '002.078.098-55', nome: 'José Barão'},
				{cpf: '005.333.888-11', nome: 'Luiz Camboja'}
			],
			valor			: '',
			interativo		: false,
			editavel		: true,
			ordem			: 2
		};
		
		lista.push(obj);
		
		return lista;
	}
	
	return {
		gerarLista : gerarLista	
	};	
	 
});