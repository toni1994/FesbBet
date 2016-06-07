(function () {
    'use strict';

    angular.module("app")
        .config(QuestionsConfig);

    QuestionsConfig.$inject = ["$stateProvider"];

    function QuestionsConfig($stateProvider) {
        $stateProvider.state('questions', {
            url: '/questions',
            templateUrl: "./Scripts/App/Questions/questions.template.html",
            controller: "QuestionsController"
        });
    }
}
)();