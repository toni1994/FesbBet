(function () {
    'use strict';

    angular.module("app")
        .config(ProfilConfig);

    ProfilConfig.$inject = ["$stateProvider","$urlRouterProvider"];

    function ProfilConfig($stateProvider) {
        $stateProvider.state('profil', {
            url: '/profil',
            templateUrl: "./Scripts/App/Profil/profil.template.html",
            controller: "ProfilController"
        })
        .state('changePassword', {
            url: '/profil/changePassword',
            templateUrl: "./Scripts/App/Profil/ChangePassword.html",
            controller: "ProfilController"
        })
        ;
    }
}
)();