(function () {
    'use strict';

    angular.module("app")
        .config(ProfilConfig);

    ProfilConfig.$inject = ["$stateProvider"];

    function ProfilConfig($stateProvider) {
        $stateProvider.state('profil', {
            url: '/profil',
            templateUrl: "./Scripts/App/Profil/profil.template.html",
            controller: "ProfilController"
        });
    }
}
)();