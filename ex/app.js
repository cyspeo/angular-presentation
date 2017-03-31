var app = angular.module('app', ["ngRoute"]);
app.controller('mainCtrl', function ($scope) {
});
app.controller("feedCtrl", ['$scope', 'feedService', function ($scope, Feed) {
    $scope.loadButonText = "Load";
    $scope.loadFeed = function (e) {
        Feed.parseFeed($scope.feedSrc).then(function (res) {
            $scope.loadButonText = angular.element(e.target).text();
            $scope.feeds = res.data.responseData.feed.entries;
        });
    }
}]);

app.service('feedService', ['$http', function ($http) {
        this.parseFeed = function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&amp;num=50&amp;callback=JSON_CALLBACK&amp;q=' + encodeURIComponent(url));
        }
}]);

