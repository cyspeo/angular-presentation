app.controller("detailFeedCtrl", ['$scope', '$routeParams',  function ($scope, $routeParams) {
    $scope.feed = JSON.parse($routeParams.feed);
}]);