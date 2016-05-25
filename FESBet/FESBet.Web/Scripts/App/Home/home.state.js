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
})();