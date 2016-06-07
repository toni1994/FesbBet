(function () {
    'use strict';

    angular.module("app").controller('TicketsController', TicketsController);

    TicketsController.$inject = ["$state","$scope"];
    function TicketsController($state, $scope) {
        $scope.pin = 1249405,
        $scope.data = '23/06/2016',
        $scope.status = 'LOSE',
        $scope.showWin = false,
        $scope.showLose = true,
        $scope.showWaiting = false
    }
}
)();