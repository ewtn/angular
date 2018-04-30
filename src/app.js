'use strict';

angular.module('angularAPP', [ 
	'ngRoute', 
	'ngAnimate', 
	'informacoesComplementaresControllers',
	'minhasDiretivas', 
	'meusFiltros',
	'utilsJS'])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/consultar-imagem', {
			templateUrl : 'spas/consultar/consultar-tpl.html'
		})
		.when('/alura-pic', {
			templateUrl : 'spas/alura-pic/alura-pic-tpl.html'
		})
		.when('/informacoes-complementares', {
			templateUrl : 'spas/informacoes-complementares/informacoes-complementares-tpl.html'
		})
		.otherwise({
			redirectTo : '/informacoes-complementares'
		});
} ]);