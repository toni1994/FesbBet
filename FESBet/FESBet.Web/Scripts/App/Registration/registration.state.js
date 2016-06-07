(function () {
    'use strict';

    angular.module("app")
        .config(RegistrationConfig);

    RegistrationConfig.$inject = ["$stateProvider"];

    function RegistrationConfig($stateProvider) {
        $stateProvider.state('registration', {
            url: '/registration',
            templateUrl: "./Scripts/App/Registration/registration.template.html",
            controller: "RegistrationController"
        });
    }
}
)();