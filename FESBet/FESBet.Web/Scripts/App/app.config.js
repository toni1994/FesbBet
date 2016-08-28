(function () {
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ["$urlRouterProvider", "$locationProvider"];
    function AppConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }


    angular.module('app').run(runFunc);

    runFunc.$inject = ['$http', 'localStorageService', '$rootScope', '$state'];
    function runFunc($http, localStorageService, $rootScope, $state) {
        console.log("TEST");
        $http.get('/login/get-logged')
                        .then(function (result) {
                            $rootScope.loggedUser = result.data;
                            console.log(result.data);
                            $state.go('home');
                        });
    }
})();