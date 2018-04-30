angular

.module('utilsJS', [])

.service('utils', function() {
	
	function inverterString(valor) 
	{
		return valor.split('').reverse().join('');
	}
	
	function removerAcentos(parametro) 
	{
		parametro = parametro.toLowerCase();                                                         
		parametro = parametro.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
	    parametro = parametro.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
	    parametro = parametro.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
	    parametro = parametro.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
	    parametro = parametro.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
	    parametro = parametro.replace(new RegExp('[Ç]','gi'), 'c');
	    
	    return parametro;
	}
	
	function removerCaractere(parametro, caractere)
	{
		while (contains(parametro, caractere)) 
		{
			parametro = parametro.replace(caractere, '');
		}
		return parametro;
	}
	
	function substituirCaractere(parametro, caractere, substituirPor)
	{
		while (contains(parametro, caractere)) 
		{
			parametro = parametro.replace(caractere, substituirPor);
		}
		return parametro;
	}
	
	function contains(parametro, pesquisarPor)
	{
		return parametro.indexOf(pesquisarPor) !== -1;
	}
	
	function isEmpty(parametro)
	{
		return !parametro || parametro.length === 0;
	}
	
	var service = 
	{
		inverterString : inverterString,
		removerAcentos : removerAcentos,
		removerCaractere: removerCaractere,
		substituirCaractere: substituirCaractere,
		contains : contains,
		isEmpty : isEmpty
	}
	
	return service;
})