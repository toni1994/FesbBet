(function () {
    'use strict';

    angular.module("app")
        .config(BetConfig);

    BetConfig.$inject = ["$stateProvider"];

    function BetConfig($stateProvider) {
        $stateProvider.state('bet', {
            url: '/bet',
            templateUrl: "./Scripts/App/Bet/bet.template.html",
            controller: "BetController"
        });
    }
}
)();