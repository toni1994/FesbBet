(function () {
    'use strict';

    angular.module('app')
        .controller("HomeController", HomeController);

    HomeController.$inject = ["$state", "$scope"];
    function HomeController($state, $scope) {
        $scope.container = {
            sport: [
                {
                    name: 'Football',
                    description: 'Enyoj in betting on over 100 leagues - English Premier barclays league,Spanish BBVA league, Italian Seria A and others. Follow your favourite team or players and be part of worlds most popular sport.',
                    image: "Content/Pictures/Football.jpg",
                    index:0
                },
                {
                    name: 'Tennis',
                    description: 'Bet on the most popular tennis tournaments like a Wimbledon, French Open, US open and Australia open. You can choose between Mens singles, Men doubles, Womens singles or Womens doubles tennis.',
                    image: "Content/Pictures/Tennis.jpg",
                    index: 1
                },
                {
                    name: 'Basketball',
                    description: 'We enable you to bet on different Europan tournaments and American NBA. You can bet on players scores, blocks or assistances. You can even bet on number of goals of the match or single team which plays.',
                    image: "Content/Pictures/Basketball.jpg",
                    index: 2
                },
                  {
                     name: 'Handball',
                     description: 'Get fun betting on the most popular handball tournaments like a Olympic games, mens world championships, womens world championships and others. You can bet on goolkeepers saves, players goals or players exclusiones.',
                     image: "Content/Pictures/Handball.jpg",
                     index: 3
                  },
                {
                    name: 'Waterpolo',
                    description: 'Waterpolo is the most popular water sport. Bet on Mens waterpolo at the Olympics, mens world championships and others tournaments. You can bet on goolkeepers saves, which team will have first attack or players goals.',
                    image: "Content/Pictures/Waterpolo.jpg",
                    index: 4
                },
            ]
        }

        $scope.interval = 2000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var currIndex = 0;
        $scope.slides = [
          {
              image: '/Content/Pictures/Football.jpg',
              id: 0,
              name: "Football"
          },
          {
              image: '/Content/Pictures/Handball.jpg',
              id: 1,
              name: "Handball"
          },
          {
              image: '/Content/Pictures/Basketball.jpg',
              id: 2,
              name: "Basketball"
          },
          {
              image: '/Content/Pictures/Tennis.jpg',
              id: 3,
              name: "Tennis"
          },
          {
              image: '/Content/Pictures/Waterpolo.jpg',
              id: 4,
              name: "Waterpolo"
          }
        ];
    }
})();