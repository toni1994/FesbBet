(function () {
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ["$urlRouterProvider", "$locationProvider"];
    function AppConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }
})();