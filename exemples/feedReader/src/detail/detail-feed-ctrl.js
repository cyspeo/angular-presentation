app.controller("detailFeedCtrl", ['$scope', '$routeParams', '$sce',  function ($scope, $routeParams, $sce) {
    $scope.feed = JSON.parse($routeParams.feed);
    //L'utilisation du service $sce permet de lever le blocage de "cross domaine"
    $scope.currentUrl = $sce.trustAsResourceUrl($scope.feed.url);
}]);