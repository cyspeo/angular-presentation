app.service('feedService', ['$http', function ($http) {
        this.parseFeed = function (url) {
            return $http.get(url);
        }       
}]);