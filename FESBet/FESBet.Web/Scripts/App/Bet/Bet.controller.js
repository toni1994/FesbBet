(function () {
    'use strict';

    angular.module("app").controller('BetController', BetController);

    BetController.$inject = ["$state", "$scope", "$uibModal", "$log"];
    function BetController($state, $scope, $uibModal, $log) {
        $scope.container = {
            ticket: [
            ]

        };

        $scope.odd = 1;   //kvota
        $scope.stake = 1;   //ulog
        $scope.win = 0;      //dobitak   
        $scope.win = $scope.odd * $scope.stake;

        $scope.dayFilter = 'MON'; //početni dan

        //polje objekata koje sadrži parove
        $scope.allSport = {
            sport: [
                {
                    type: 'Football',
                    name: 'England 1',
                    matches: [{
                        id: 1,
                        teams: 'Real - Barcelona',
                        data: '2016/06/23',
                        day: 'SAT',
                        time: '18:00',
                        w1: 2.0,
                        wX: 3.5,
                        w2: 1.5,
                        w1X: 2.5,
                        wX2: 3.5,
                        wF2: 1.8
                    },
                    {
                        id: 2,
                        teams: 'Sevila - Betis',
                        data: '2016/06/23',
                        day: 'MON',
                        time: '18:00',
                        w1: 2.0,
                        wX: 3.5,
                        w2: 1.5,
                        w1X: 2.5,
                        wX2: 3.5,
                        wF2: 1.8
                    },
                    {
                        id: 3,
                        teams: 'Real - Barcelona',
                        data: '2016/06/23',
                        day: 'WEN',
                        time: '18:00',
                        w1: 2.0,
                        wX: 3.5,
                        w2: 1.5,
                        w1X: 2.5,
                        wX2: 3.5,
                        wF2: 1.8
                    }]

                },
                 {
                     type: 'Football',
                     name: 'Germany 1',
                     matches: [{
                         id: 10,
                         teams: 'Real - Barcelona',
                         data: '2016/06/23',
                         day: 'WEN',
                         time: '18:00',
                         w1: 2.0,
                         wX: 3.5,
                         w2: 1.5,
                         w1X: 2.5,
                         wX2: 3.5,
                         wF2: 1.8
                     },
                       {
                           id: 14,
                           teams: 'Real - Barcelona',
                           data: '2016/06/23',
                           day: 'WEN',
                           time: '18:00',
                           w1: 2.0,
                           wX: 3.5,
                           w2: 1.5,
                           w1X: 2.5,
                           wX2: 3.5,
                           wF2: 1.8
                       },
                       {
                           id: 44,
                           teams: 'Real - Barcelona',
                           data: '2016/06/23',
                           day: 'MON',
                           time: '18:00',
                           w1: 2.0,
                           wX: 3.5,
                           w2: 1.5,
                           w1X: 2.5,
                           wX2: 3.5,
                           wF2: 1.8
                       }]

                 },
                 {
                     type: 'Football',
                     name: 'Croatia 1',
                     matches: [{
                         id: 41,
                         teams: 'Real - Barcelona',
                         data: '2016/06/23',
                         day: 'MON',
                         time: '18:00',
                         w1: 2.0,
                         wX: 3.5,
                         w2: 1.5,
                         w1X: 2.5,
                         wX2: 3.5,
                         wF2: 1.8
                     },
                       {
                           id: 5,
                           teams: 'Real - Barcelona',
                           data: '2016/06/23',
                           day: 'MON',
                           time: '18:00',
                           w1: 2.0,
                           wX: 3.5,
                           w2: 1.5,
                           w1X: 2.5,
                           wX2: 3.5,
                           wF2: 1.8
                       },
                       {
                           id: 78,
                           teams: 'Real - Barcelona',
                           data: '2016/06/23',
                           day: 'MON',
                           time: '18:00',
                           w1: 2.0,
                           wX: 3.5,
                           w2: 1.5,
                           w1X: 2.5,
                           wX2: 3.5,
                           wF2: 1.8
                       }]
                 },

                 {
                     type: 'Tennis',
                     name: 'ATP Cincinati',
                     matches: [{
                         id: 49,
                         teams: 'Coric - Djokovic',
                         data: '2016/06/23',
                         day: 'MON',
                         time: '18:00',
                         w1: 2.0,
                         wX: 3.5,
                         w2: 1.5,
                         w1X: 2.5,
                         wX2: 3.5,
                         wF2: 1.8
                     },
                         {
                             id: 598,
                             teams: 'Cilic - Wawrinka',
                             data: '2016/06/23',
                             day: 'MON',
                             time: '18:00',
                             w1: 2.0,
                             wX: 3.5,
                             w2: 1.5,
                             w1X: 2.5,
                             wX2: 3.5,
                             wF2: 1.8
                         },
                         {
                             id: 65,
                             teams: 'Fedder - Raonic',
                             data: '2016/06/23',
                             day: 'MON',
                             time: '18:00',
                             w1: 2.0,
                             wX: 3.5,
                             w2: 1.5,
                             w1X: 2.5,
                             wX2: 3.5,
                             wF2: 1.8
                         }]
                 },

                 {
                     type: 'Handball',
                     name: 'Word Cup',
                     matches: [{
                         id: 899,
                         teams: 'Slovenia - Spain',
                         data: '2016/06/23',
                         day: 'MON',
                         time: '18:00',
                         w1: 2.0,
                         wX: 3.5,
                         w2: 1.5,
                         w1X: 2.5,
                         wX2: 3.5,
                         wF2: 1.8
                     },
                         {
                             id: 6577,
                             teams: 'Denmark - Sweden',
                             data: '2016/06/23',
                             day: 'MON',
                             time: '18:00',
                             w1: 2.0,
                             wX: 3.5,
                             w2: 1.5,
                             w1X: 2.5,
                             wX2: 3.5,
                             wF2: 1.8
                         },
                         {
                             id: 34,
                             teams: 'Croatia - Germany',
                             data: '2016/06/23',
                             day: 'MON',
                             time: '18:00',
                             w1: 2.0,
                             wX: 3.5,
                             w2: 1.5,
                             w1X: 2.5,
                             wX2: 3.5,
                             wF2: 1.8
                         }]
                 },


            ]

        }


        //funkcija koja se poziva kada se klikne na kvotu kako bi se par pojavio na listiću
        $scope.takeMatch = function (name, day, time, odd, bet, id, data) {
            var checker = 0;
            if ($scope.container.ticket.length > 0) {
                for (var i = 0; i < $scope.container.ticket.length; i++) {
                    console.log(id);
                    console.log($scope.container.ticket[i].id);
                    if (id == $scope.container.ticket[i].id) {
                        $scope.odd = $scope.odd / $scope.container.ticket[i].odd;
                        $scope.container.ticket.splice(i, 1);
                        $scope.odd = $scope.odd * odd;
                        $scope.win = $scope.odd * $scope.stake;
                        $scope.container.ticket.push({
                            id: id,
                            name: name,
                            day: day,
                            time: time,
                            data: data,
                            bet: bet,
                            odd: odd,
                        })
                        checker = 1;
                        break;
                    }
                }
                if (checker == 0) {
                    $scope.odd = $scope.odd * odd;
                    $scope.win = $scope.odd * $scope.stake;
                    $scope.container.ticket.push({
                        id: id,
                        name: name,
                        day: day,
                        time: time,
                        data: data,
                        bet: bet,
                        odd: odd,
                    })
                }

            }

            else {
                $scope.odd = $scope.odd * odd;
                $scope.win = $scope.odd * $scope.stake;
                $scope.container.ticket.push({
                    id: id,
                    name: name,
                    day: day,
                    time: time,
                    data: data,
                    bet: bet,
                    odd: odd,
                })
            }
        }


        //funkcije za odabir dana u tjednu
        $scope.filterMon = function () {
            $scope.dayFilter = 'MON';
        }

        $scope.filterTue = function () {
            $scope.dayFilter = 'TUE';
        }

        $scope.filterWen = function () {
            $scope.dayFilter = 'WEN';
        }

        $scope.filterThu = function () {
            $scope.dayFilter = 'THU';
        }

        $scope.filterFri = function () {
            $scope.dayFilter = 'FRI';
        }

        $scope.filterSat = function () {
            $scope.dayFilter = 'SAT';
        }

        $scope.filterSan = function () {
            $scope.dayFilter = 'SAN';
        }

        //funkcija za brisanje para iz tiketa
        $scope.deleteMatch = function (id) {
            for (var i = 0; i < $scope.container.ticket.length; i++) {
                if (id == $scope.container.ticket[i].id) {
                    $scope.odd = $scope.odd / $scope.container.ticket[i].odd;
                    $scope.win = $scope.odd * $scope.stake;
                    $scope.container.ticket.splice(i, 1);
                }

            }
        }



        $scope.animationsEnabled = true;


        //kod za poziv modalnog prozora
        $scope.open = function (size, win, stake, odd) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'currentTicket.html',
                controller: Ticket,
                size: size,
                resolve: {
                    ticket: function () {
                        return $scope.container.ticket;
                    },
                    win: function () {
                        return $scope.stake * $scope.odd;
                    },
                    stake: function () {
                        return $scope.stake;
                    },
                    odd: function () {
                        return $scope.odd;
                    }
                }
            });

            modalInstance.result.then(function () {

            });
        }

        //funkcija koja predstavlja kontroler modalnog prozora
        function Ticket($scope, $uibModalInstance, ticket, win, stake, odd) {

            $scope.ticket = ticket;
            $scope.win = win;
            $scope.stake = stake;
            $scope.odd = odd;

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.submit = function () {
                $uibModalInstance.dismiss('cancel');
                window.alert("Your ticket is succesfully paid");
            };
        }
        $scope.choosen = '';

        $scope.chooseSport = function (sport) {
            if (sport == 'Football') { $scope.choosen = 'Football' }
            else if (sport == 'Tennis') { $scope.choosen = 'Tennis' }
            else if (sport == 'Basketball') { $scope.choosen = 'Basketball' }
            else if (sport == 'Waterpolo') { $scope.choosen = 'Waterpolo' }
            else if (sport == 'Handball') { $scope.choosen = 'Handball' }
            else { $scope.choosen = ''; }
        }
    }
    }

)();