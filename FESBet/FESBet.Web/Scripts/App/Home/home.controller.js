(function () {
    'use strict';

    angular.module('app')
        .controller("HomeController", HomeController);

    HomeController.$inject = ["mainService", "$state"];
    function HomeController(mainService, $state) {
    }
}
)();