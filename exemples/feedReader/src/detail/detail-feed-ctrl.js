app.controller("detailFeedCtrl", ['$scope', '$routeParams', '$sce',  function ($scope, $routeParams, $sce) {
    $scope.feed = JSON.parse($routeParams.feed);
    //L'utilisation du service $sce permet de lever le blocage de "cross domaine"
    //La suppression  "https:" permet de régler le problème de "mixed content"
    $scope.currentUrl = $sce.trustAsResourceUrl($scope.feed.url.replace("http:",""));
}]);