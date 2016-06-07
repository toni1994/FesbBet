(function () {
    'use strict';

    angular.module("app")
        .config(TicketsConfig);

    TicketsConfig.$inject = ["$stateProvider"];

    function TicketsConfig($stateProvider) {
        $stateProvider.state('tickets', {
            url: '/tickets',
            templateUrl: "./Scripts/App/Tickets/tickets.template.html",
            controller: "TicketsController"
        });
    }
}
)();