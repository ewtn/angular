'use strict';

angular.module('angularAPP', [ 'ngRoute', 'ngSanitize', 'ui.bootstrap', 'minhasDiretivas' ])

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