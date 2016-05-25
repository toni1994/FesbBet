(function()
{
    'use strict';
    angular.module("app").service('SignInController', SignInController);
    SignInController.$inject = ["mainService", "$state"];
    function SignInController(mainService, $state) {

    }
}
)();