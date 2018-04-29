'use strict';

angular.module('angularAPP', [ 'ngRoute', 'ngAnimate', 'minhasDiretivas', 'meusFiltros'])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/consultar-imagem', {
			templateUrl : 'spas/consultar/consultar-tpl.html'
		})
		.when('/alura-pic', {
			templateUrl : 'spas/alura-pic/alura-pic-tpl.html'
		})
		.otherwise({
			redirectTo : '/alura-pic'
		});
} ]);