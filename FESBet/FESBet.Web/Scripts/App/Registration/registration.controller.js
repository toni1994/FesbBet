(function () {
    'use strict';

    angular.module("app").controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ["$state", "$scope", "$http"];
    function RegistrationController($state, $scope, $http) {

        $scope.submit = function() {
            if ($scope.firstName && $scope.lastName && $scope.birth && $scope.username && $scope.email && $scope.password && $scope.password2) {
                var obj = {
                    FirstName: $scope.firstName,
                    LastName: $scope.lastName,
                    DateOfBirth: $scope.birth,
                    Username: $scope.username,
                    Email: $scope.email,
                    Password: $scope.password
                }
                $http.post('/api/create', obj)
                .then(function () {
                    alert("Uspjesno napravljeno");
                    $state.go('home');
                });
            } else {
                alert("Nepotpuna prijava!");
            }
        }
    }
}
)();