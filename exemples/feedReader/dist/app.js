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




app.filter('highlight', function($sce) {
    return function(text, search) {
      if (search) text = text.replace(new RegExp('('+search+')', 'gi'),
        '<span class="highlighted">$1</span>')
      return $sce.trustAsHtml(text)
    }
});
app.service('feedService', ['$http', function ($http) {
        this.parseFeed = function (url) {
            return $http.get(url);
        }       
}]);
app.controller("detailFeedCtrl", ['$scope', '$routeParams',  function ($scope, $routeParams) {
    $scope.feed = JSON.parse($routeParams.feed);
}]);
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