
(function(angular) {
    angular.module('my-application.controllers', []);
    angular.module('my-application.services', []);
    angular.module('my-application.directives', []);
    angular.module('my-application.filters', []);
    angular.module('my-application.mocks', []);

    angular.module('my-application', [
        'ngRoute',
        'ngAnimate',
        'my-application.controllers',
        'my-application.directives',
        'my-application.filters',
        'my-application.services'
    ]);
})(window.angular);

(function(angular) {
    'use strict';
    
    // route-config.js
    angular
        .module('my-application')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/my-resources', {
                templateUrl: 'templates/my-resources.html',
                controller: 'MyResourcesController',
                controllerAs: 'vm'
            })
            .when('/my-resources/:id', {
                templateUrl: 'templates/my-resource.html',
                controller: 'MyResourceController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/my-resources'
            });
    }
})(window.angular);