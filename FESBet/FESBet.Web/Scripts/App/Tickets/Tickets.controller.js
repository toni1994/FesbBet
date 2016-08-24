(function () {
    'use strict';

    angular.module("app").controller('TicketsController', TicketsController);

    TicketsController.$inject = ["$state", "$scope", "$uibModal","$log"];
    function TicketsController($state, $scope, $uibModal, $log) {

        $scope.tickets = [
            {
                pin: 1249405,
                index:0,
                data: '2016/06/23',
                status: 'LOSE',
                payIn: 50,
                totalOdd: 56.8,
                win: 2560,
                matches : [
                    {
                    name: 'Real - Barcelona',
                    data: '2016/06/23',
                    time: '18:00',
                    bet: 2,
                    odd: 3.56,
                    statusMatch: 'LOSE',
                    id: 1,
                    },
                     {
                         name: 'Real - Barcelona',
                         data: '2016/06/23',
                         time: '18:00',
                         bet: 1,
                         odd: 2.56,
                         statusMatch: 'LOSE',
                         id: 2
                     },
                      {
                          name: 'Real - Barcelona',
                          data: '2016/06/23',
                          time: '18:00',
                          bet: 1,
                          odd: 2.56,
                          statusMatch: 'LOSE',
                          id: 3
                      }]
            },
            {
                pin: 42873,
                index: 1,
                data: '2016/07/03',
                status: 'WIN',
                payIn: 40,
                totalOdd: 5,
                win: 200,
                matches: [
                    {
                        name: 'Real - Barcelona',
                        data: '2016/06/23',
                        time: '18:00',
                        bet: 1,
                        odd: 2.56,
                        status: 'WIN',
                        id: 1,
                    },
                     {
                         name: 'Real - Barcelona',
                         data: '2016/06/23',
                         time: '18:00',
                         bet: 1,
                         odd: 2.56,
                         status: 'WIN',
                         id: 2
                     },
                      {
                          name: 'Real - Barcelona',
                          data: '2016/06/23',
                          time: '18:00',
                          bet: 1,
                          odd: 2.56,
                          status: 'WAITING',
                          id: 3
                      }]
            },
            {
                pin: 453124,
                index: 2,
                data: '2016/06/26',
                status: 'WAITING',
                payIn: 10,
                totalOdd: 56.8,
                win: 568,
                matches: [
                    {
                        name: 'Real - Barcelona',
                        data: '2016/06/23',
                        time: '18:00',
                        bet: 1,
                        odd: 2.56,
                        statusMatch: 'WAITING',
                        id: 1,
                    },
                     {
                         name: 'Real - Barcelona',
                         data: '2016/06/23',
                         time: '18:00',
                         bet: 1,
                         odd: 2.56,
                         statusMatch: 'WAITING',
                         id: 2
                     },
                      {
                          name: 'Real - Barcelona',
                          data: '2016/06/23',
                          time: '18:00',
                          bet: 1,
                          odd: 2.56,
                          statusMatch: 'WAITING',
                          id: 3
                      }]
            },
            {
                pin: 494054,
                index: 3,
                data: '2016/05/23',
                status: 'LOSE',
                payIn: 500,
                totalOdd: 8,
                win: 4000,
                matches: [
                    {
                        name: 'Real - Barcelona',
                        data: '2016/06/23',
                        time: '18:00',
                        bet: 1,
                        odd: 2.56,
                        statusMatch: 'WAITING',
                        id: 1,
                    },
                     {
                         name: 'Real - Barcelona',
                         data: '2016/06/23',
                         time: '18:00',
                         bet: 1,
                         odd: 2.56,
                         statusMatch: 'WAITING',
                         id: 2
                     },
                      {
                          name: 'Real - Barcelona',
                          data: '2016/06/23',
                          time: '18:00',
                          bet: 1,
                          odd: 2.56,
                          statusMatch: 'LOSE',
                          id: 3
                      }]
            }
        ]
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