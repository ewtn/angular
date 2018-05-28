angular

.module('minhasDiretivas', [])

.directive('info', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {	
			//verifica se a lista não existe para cria-la (MOCK)
			if(!scope.lista) {
			    scope.lista = [];
			    
			    //Cria os objetos referentes a campos obrigatórios e facultativos
			    var objTemp = {};
			    objTemp.titulo = 'Obrigatórios';
			    objTemp.lista = [];
			    scope.lista.push(angular.copy(objTemp));
			    
			    objTemp.titulo = 'Facultativos';
			    scope.lista.push(angular.copy(objTemp));
            	
			    //cria a requisição (MOCK)
            	var lista = criarRequisicao();	
            	
				//Ordenação por grupo
			    lista.sort(function(a, b) {
	               return a.obrigatorio === 'S' ? -1 : 1;  
                });
				
			    //cria as listas por grupo
				criarGrupamentos(lista);			    
			}			

			/*
			 * Função para remoção de elemento duplicado
			 */
            scope.remover = function(index, grupo) {
            	//remove o elemento da lista através do index
	            grupo.docs.splice(index, 1);
	            
	            //variável para verificar se habilita o campo de clonar novamente
	            var algumDuplicado = false;
	            
	            //procura no grupo se não existe mais elementos clonados
	            grupo.docs.forEach(function(item) {
	                if(item.duplicado) {
	                	algumDuplicado = true;
	                }
                });
	            
	            //se não encontrou nenhum elemento clonado, habilita botão de clonar novamente
	            if(!algumDuplicado) {
	            	grupo.jaRreplicado = false;
	            }
            };
            
			/*
			 * Função de duplicação de elemento
			 */
			scope.duplicar = function(grupo) {	
				//variavel para controle do icone de replicação
				grupo.jaRreplicado = true;
				
				//criação da lista temporária para manipulação
				var listaTemp = angular.copy(grupo.docs);
				
				//clona elementos da lista temporária criada
				listaTemp.forEach(function(item) {
					item.duplicado = true;
					item.value = '';
					item.style = 'border: 1px solid red';
					grupo.docs.push(item);
                });				
            };

			/*
			 * Função para incluir/remover a borda vermelha no elemento
			 */
            scope.verificaBorda = function(grupoDocs) {    
            	//variavel para identificar se algum elemento do grupo esta preenchido
            	var algumPreenchido = false;
        		grupoDocs.forEach(function(item) {	            		
            		if(item.value && item.value !== '') {
            			algumPreenchido = true;
            		}
                });

            	//se sim todos os elementos do grupo se tornam obrigtórios
        		grupoDocs.forEach(function(item) {
            		//verifica se é necessário incluir/remover a borda do elemento
        			item.style = '';            		
            		if(item.obrigatorio === 'S' && (!item.value || item.value === '')) {
            			item.style = 'border: 1px solid red';
            		} else if(algumPreenchido && (!item.value || item.value === '')) {
            			item.style = 'border: 1px solid red';
            		}
                });
        		
        		if(scope.habilitaEnvio()) {
        			scope.salvar();
        		}
            };

			/*
			 * Função para habilitar/desabilitar o botão de salvar
			 */
            scope.habilitaEnvio = function() {	
            	//variavel para verificar se existe algum elemento de preenchimento obrigatório
            	var habilita = true;
            	scope.lista.forEach(function(tipoLista) {
            		tipoLista.lista.forEach(function(grupo) {
            			grupo.docs.forEach(function(item) {
            				if(item.style.length > 0) {	            			
            					habilita = false;
    	            		} 
                        })
                    });
            	});
	            return habilita;
            };

			/*
			 * Função para enviar a lista para inclusão
			 */
            scope.salvar = function() {	            
	            var listaFinal = [];
	            var seq = 0;
	            
	            scope.lista.forEach(function(tipoLista) {
            		tipoLista.lista.forEach(function(grupo) {
            			grupo.docs.forEach(function(item) {
            				if(item.value && item.value !== '') {
                				var obj = angular.copy(item);

        	            		//gera o sequencial para gravação
        	            		obj.sequencial = ++seq;

        	            		//Remover elementos não necessários na operação
        		            	delete obj.style;
        		            	delete obj.placeholder;
        	            		delete obj.duplicado;
        	            		
        	            		listaFinal.push(obj);
            				}
                        });
                    });
            	});
	            //gerar broadcast para prosseguir com a inclusão
	            console.log('listaFinal', listaFinal);
            };

			/*
			 * Função que cria os grupos nas listas obrigatorias e facultativas
			 */
            function criarGrupamentos(lista) {
            	var grpsObg = [];
            	
            	var listaTemporaria = [];			    
            	
			    lista.forEach(function(item) {
			    	if(item.obrigatorio === 'S') {
			    		grpsObg.push(item.grupo);
	            		item.style = 'border: 1px solid red';
			    	} else if(grpsObg.indexOf(item.grupo) !== -1) {
			    		item.obrigatorio = 'S';
	            		item.style = 'border: 1px solid red';
			    	} else {
	            		item.style = '';
		    		}
            		listaTemporaria.push(item);
			    });
            	
            	listaTemporaria.sort(function(a,b) {
	                return a.grupo < b.grupo ? -1 : a.grupo > b.grupo ? 1 : 0;
                });
            	
            	var modelGrupo = {
            		tipo: 0,
            		docs: []
            	};
            	
            	var gruposAdicionados = [];
            	
            	listaTemporaria.forEach(function(item) {
	                if(gruposAdicionados.indexOf(item.grupo) === -1) {
	                	gruposAdicionados.push(item.grupo);

                		var novoGrupo = angular.copy(modelGrupo);
                		novoGrupo.tipo = item.grupo;
                		novoGrupo.docs.push(item);
                		
	                	if(item.obrigatorio === 'S') {
	                		scope.lista[0].lista.push(novoGrupo);
	                	} else {
	                		scope.lista[1].lista.push(novoGrupo);
	                	}
	                }
	                else
	                {
	                	if(item.obrigatorio === 'S') {
	                		scope.lista[0].lista[scope.lista[0].lista.length-1].docs.push(item);
	                	} else {
	                		scope.lista[1].lista[scope.lista[1].lista.length-1].docs.push(item);
	                	}
	                }
                });
            }
            
            //MOCK
            function criarRequisicao() {
            	var lista = [];
            	
            	var obj = {
			    	label 		: 'Label',
			    	value 		: '',
			    	grupo 		: 0,
			    	obrigatorio : 'S',
			    	iterativo	: 'N'
			    };
            	
			    lista.push(angular.copy(obj));
			    
			    obj.obrigatorio = 'N';
			    obj.iterativo = 'S';
			    obj.grupo = 3;
			    lista.push(angular.copy(obj));
			    
			    obj.grupo = 1;
			    lista.push(angular.copy(obj));
	
			    obj.iterativo = 'N';
			    obj.grupo = 3;
			    lista.push(angular.copy(obj));
	
			    obj.iterativo = 'N';
			    obj.grupo = 3;
			    lista.push(angular.copy(obj));
	
			    obj.iterativo = 'N';
			    obj.grupo = 3;
			    lista.push(angular.copy(obj));
			    
			    obj.grupo = 2;
			    lista.push(angular.copy(obj));
			    
			    obj.iterativo = 'S';
			    obj.grupo = 2;
			    lista.push(angular.copy(obj));
			    
			    obj.obrigatorio = 'S';
			    obj.iterativo = 'N';
			    obj.grupo = 1;
			    lista.push(angular.copy(obj));
			    
			    return lista;
            }
		},
		transclude: true,
		templateUrl: 'resources/directives/templates/info-tpl.html'
	}
})


/*
 * OUTRAS DIRETIVAS
 */
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
				scope.$apply(function () {
					if(event.keyCode === 13) {
						if(scope.item.labelEditando) {
							scope.item.labelEditando = false;
						}
						else if(scope.item.valueEditando) {
							scope.item.valueEditando = false;
						}						
					}
				});
			});
		},
		templateUrl: 'resources/directives/templates/informacao-complementar-tpl.html'
	};
});