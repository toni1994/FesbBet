(function () {
    'use strict';

    angular.module("app").controller('RulesController', RulesController);

    RulesController.$inject = ["$state","$scope"];
    function RulesController($state,$scope) {
        $scope.container = {
            rules: [
                {
                    rule: '1. Application',
                    description: 'All applicants must be over 18 years of age and of legal capacity to place a bet/wager or register with FESBbet. FESBbet reserves the right to ask for proof of age from any customer and suspend their account until satisfactory documentation is provided. FESBbet takes its responsibilities in respect of under age and responsible gambling very seriously',
                    index:0
                },
                {
                    rule: '2. Account Details',
                    description: 'FESBbet allows all its customers to choose their own username and password combination. Customers must keep this information secret and confidential as you are responsible for all bets/wagers placed on your account and any other activities taking place on your account.',
                    index: 1
                },
                {
                    rule: '3. Personal Data',
                    description: 'We will comply with applicable data protection laws in respect of the personal information you supply to us. Your personal information is processed in accordance with our Privacy Policy.',
                    index: 2
                },
                {
                    rule: '4. Closure',
                    description: 'If you want to close your account, please Contact Us. Any negative balance on your account will fall immediately due and payable to FESBbet, and your account will not be closed until the relevant amount owed to FESBbet is paid in full.',
                    index: 3
                },
                {
                    rule: '5. Placing Bets/Wagers',
                    description: 'FESBbet reserves the right to decline all, or part, of any bet/wager requested at its sole and absolute discretion. All bets/wagers are placed at your own risk and discretion. ',
                    index: 4
                }
            ]
        }
    }
}
)();