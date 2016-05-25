(function ()
{
    'use strict';
    angular.module("app").config("SignInStateConfig");
    SignInStateConfig.$inject = ["$stateProvider"];
    function SignInStateConfig($stateProvider)
    {
        $stateProvider.state('registration', {
            url: '/registration',
            templateUrl: "./Scripts/App/Sign-In/sign-in.template.html",
            controller: "SignInController"
        });
    }
}
)();