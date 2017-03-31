app.controller("feedCtrl", ['$scope', 'feedService', function ($scope, Feed) {
    $scope.feedSrc = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9e8f2478bffb49bc92f9c43f75ceadbb";
    $scope.filterText = "";
    //Chargement du flux rss
    $scope.loadFeed = function (e) {
        Feed.parseFeed($scope.feedSrc).then(function (res) {
            $scope.feeds = res.data.articles;
        });
    };
}]);