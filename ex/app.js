var app = angular.module('app', ["ngRoute"]);
app.controller('mainCtrl', function ($scope) {
    $scope.name = "Cedric";
    $scope.raz = function () {
        $scope.name = "";
    }
});
app.controller('listFeedCtrl', function ($scope) {
});
app.controller('paramCtrl', function ($scope) {
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { controller: 'listFeedCtrl', templateUrl: 'embedded.listFeed.html' })
        .when('/param', { controller: 'paramCtrl', templateUrl: 'embedded.param.html' })
        .otherwise({ redirectTo: "/" });
});

