var app = angular.module('app', ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'feed-list.html',
            controller: "feedCtrl",
            controllerAs: "ctrl"
        })
        .when('/detail/', {
            templateUrl: 'feed-detail.html',
            controller: "detailFeedCtrl",
            controllerAs: "ctrl"
        })
        .otherwise({ redirectTo: '/' });
}])



