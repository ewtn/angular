angular

.module('meusFiltros', [])

.filter('formatarData', function(utils) 
{
	return function(parametro) 
	{
		return utils.substituirCaractere(parametro, '.', '/');
	}
})

.filter('formatarRG', function(utils) 
{
	return function(valor) {
		
		if(utils.isEmpty(valor))
		{
			return valor;
		}
		
		var resultado = '';
		
		valor = utils.removerCaractere(valor, '.');
		valor = utils.inverterString(valor);
		
		for(var i = 0; i < valor.length; i++)
		{
			if(i !== 0 && i%3 === 0)
		    {
		    	resultado += '.'+valor[i];
		    }
		    else
		    {
		    	resultado += valor[i];
		    }
		}
		
		return utils.inverterString(resultado);
	}
})

.filter('filtroFotos', function() 
{
	return function(lista, parametro) 
	{			
		if(utils.isEmpty(parametro))
		{
			return lista;
		}
		
		var listaFinal = [];
		
		lista.forEach(function(item)
		{
			var caracteristicas = utils.removerAcentos(item.titulo)+item.idade;
			
			if(utils.contains(caracteristicas, utils.removerAcentos(parametro)))
			{
				listaFinal.push(item);
			}
		});
		
		return listaFinal;
	}
});