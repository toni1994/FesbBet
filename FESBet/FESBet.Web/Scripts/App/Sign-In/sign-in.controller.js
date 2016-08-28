(function(){
    'use strict';

    angular.module("app").controller('SignInController', SignInController);

    SignInController.$inject = ["$state", "$scope", '$http', 'localStorageService', '$rootScope'];
    function SignInController($state, $scope, $http, localStorageService, $rootScope) {
        $scope.login = function () {
            $http.post('/login/signin',
            {
                username: $scope.username,
                password: $scope.password
            })
            .then(function (result) {
                if (result.data === null) {
                    alert("login failed");
                } else {
                    console.log(result.data);
                    localStorageService.set('loggedUser',
                    {
                        username: $scope.username
                    });
                    $http.get('/login/get-logged')
                        .then(function(result) {
                            $rootScope.loggedUser = result.data;
                            console.log(result.data);
                            $state.go('home');
                        });

                    
                }
            });
        }
    }
}
)();