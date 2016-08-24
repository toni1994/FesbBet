(function () {
    'use strict';

    angular.module("app").controller('ProfilController', ProfilController);

    ProfilController.$inject = ["$state", "$scope"];
    function ProfilController($state,$scope) {
        $scope.profile = {
            firstName: 'Toni',
            lastName: 'Buzov',
            dateOfBirth : '28/06/1994',
            userName: 'Big Toni',
            email: 'tonibuzov435@gmail.com'
        }
       
    }
}
)();