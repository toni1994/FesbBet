(function () {
    'use strict';

    angular.module("app").controller('TicketsController', TicketsController);

    TicketsController.$inject = ["$state", "$scope", "$uibModal", "$log", "localStorageService"];
    function TicketsController($state, $scope, $uibModal, $log, localStorageService) {

        $scope.tickets = angular.fromJson(localStorageService.get('tickets'));
        $scope.ticketOrder = 'data';
        
        $scope.checkFalse = function (status) {
            if (status == 'LOSE')
                return true;
            else
                return false;
        }

        $scope.checkWin = function (status) {
            if (status == 'WIN')
                return true;
            else
                return false;
        }

        $scope.checkWait = function (status) {
            if (status == 'WAITING')
                return true;
            else
                return false;
        }

        $scope.animationsEnabled = true;

        $scope.open = function (size, index, a) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'ticket.html',
                controller: Ticket,
                size: size,
                resolve: {
                    ticket: function () {     
                        return $scope.tickets[index];
                    }
                }
            });
            modalInstance.result.then(function () {
               
            });
        };

    }



    //cotroller ticket
    function Ticket($scope, $uibModalInstance, ticket) {

        $scope.ticket = ticket;

        $scope.checkFalse = function (status) {
            if (status == 'LOSE')
                return true;
            else
                return false;
        }

        $scope.checkWin = function (status) {
            if (status == 'WIN')
                return true;
            else
                return false;
        }

        $scope.checkWait = function (status) {
            if (status == 'WAITING')
                return true;
            else
                return false;
        }

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
}
)();