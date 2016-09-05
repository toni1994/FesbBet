(function () {
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ["$urlRouterProvider", "$locationProvider"];
    function AppConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }


    angular.module('app').run(runFunc);

    runFunc.$inject = ['$http', 'localStorageService', '$rootScope', '$state'];
    function runFunc($http, localStorageService, $rootScope, $state) {
        $http.get('/login/get-logged')
        .then(function (result) {
            $rootScope.loggedUser = result.data;
            console.log(result.data);


            if (!localStorageService.get('tickets')) {
                var test = [
                {
                    pin: 1249405,
                    index: 0,
                    data: '2016/06/23',
                    status: 'LOSE',
                    payIn: 50,
                    totalOdd: 56.8,
                    win: 2560,
                    matches: [
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
                ];
                localStorageService.set('tickets', angular.toJson(test));
            }


            $state.go('home');
        });
    }
})();