describe('feedCtrl', function() {
    var $scope;

    //Chargement du module de notre application avant les tests
    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller, feedService) {
        //Nous demandons au service $rootscope de créer un scope pour notre controller
        scope = $rootScope.$new();
        feedCtrl = $controller('feedCtrl',{
            $scope: scope,
            feedService: feedService
        })
    }))

    it('Doit initialiser feedSrc à la construction', function() {
        expect(scope.feedSrc).toBe("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9e8f2478bffb49bc92f9c43f75ceadbb");
    });
})