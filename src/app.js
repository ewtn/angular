'use strict';

angular.module('angularAPP', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'spas/consultar/consultar-tpl.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);