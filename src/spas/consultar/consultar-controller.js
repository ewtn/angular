'use strict';

angular.module('angularAPP')

.controller('consultarController', function ($http)
{
    var vm = this;

    vm.imagem = '';

    vm.teste = function()
    {  
        var pathImagem = 'C:/Users/EwTn/Pictures/Image-1.jpg';

        var url = 'http://localhost:8080/angularAPI/rest/angularAPI/reloadImagem/';

        $http.get(url+pathImagem).then(
            function(response) 
            {
                vm.imagem = 'data:image/jpg;base64,'+response.data;
            }, 
            function(err) 
            {
                console.log(err);
            }
        );

    };
});