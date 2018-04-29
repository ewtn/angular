angular

.module('meusFiltros', [])

.filter('filtroFotos', function() 
{
	return function(lista, parametro) 
	{			
		if(parametro.length === 0)
		{
			return lista;
		}
		
		parametro = removerAcentos(parametro);
		
		console.log('parametro', parametro);
		
		var listaFinal = [];
		
		lista.forEach(function(item)
		{
			var pesquisandoParams = removerAcentos(item.titulo)+item.idade;
			
			if(pesquisandoParams.indexOf(parametro) !== -1)
			{
				listaFinal.push(item);
			}
		});
		
		return listaFinal;
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
});