(function () {
    'use strict';

    angular.module('app').config(HomeConfig);

    HomeConfig.$inject = ["$stateProvider"];

    function HomeConfig($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: "./Scripts/App/Home/Home.html",
            controller: "HomeController"
        });
    }



    angular.module('app').config(LogoutConfig);

    LogoutConfig.$inject = ["$stateProvider"];

    function LogoutConfig($stateProvider) {
        $stateProvider.state('logout', {
            url: '/logout',
            template: "",
            controller: "LogoutController"
        });
    }


    angular.module('app')
        .controller("LogoutController", LogoutController);

    LogoutController.$inject = ["$rootScope", "$http", "$state"];
    function LogoutController($rootScope, $scope, $t) {
        $scope.get('/login/signout')
        .then(function() {
            $rootScope.loggedUser = null;
            $t.go('home');
        });
    }
})();