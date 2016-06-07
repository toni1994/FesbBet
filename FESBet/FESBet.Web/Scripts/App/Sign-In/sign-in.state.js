(function (){
    'use strict';

    angular.module("app")
        .config(SignInStateConfig);

    SignInStateConfig.$inject = ["$stateProvider"];

    function SignInStateConfig($stateProvider)
    {
        $stateProvider.state('sign-in', {
            url: '/sign-in',
            templateUrl: "./Scripts/App/Sign-In/sign-in.template.html",
            controller: "SignInController"
        });
    }
}
)();