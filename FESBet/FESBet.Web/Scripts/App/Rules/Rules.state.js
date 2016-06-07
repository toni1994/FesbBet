(function () {
    'use strict';

    angular.module("app")
        .config(RulesConfig);

    RulesConfig.$inject = ["$stateProvider"];

    function RulesConfig($stateProvider) {
        $stateProvider.state('rules', {
            url: '/rules',
            templateUrl: "./Scripts/App/Rules/rules.template.html",
            controller: "RulesController"
        });
    }
}
)();