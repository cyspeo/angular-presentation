
describe("Test unitaire du service feedService", function () {
    var feedService;
    //Chargement des modules (notre application et ses dépendances) 
    beforeEach(function () {
        module('ngRoute');
        module('app');
    });
    //Injection du service que l'on veut utiliser
    beforeEach(inject(function (_feedService_) {
        feedService = _feedService_;
    }))
    //Test
    it('Le service devrait être défini', function () {
        expect(feedService).toBeDefined();
    });

    describe('Test de la méthode parseFeed ($http mocké)', function () {
        var $httpBackend;

        beforeEach(inject(function ($injector) {
            // Initialisation du mock du service $http
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9e8f2478bffb49bc92f9c43f75ceadbb')
                .respond(200, { articles: [{author:'guillaume', title: '', description: '', url:'', urlToImage:'', publishedAt: new Date()}]});
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Doit renvoyer un tableau d'articles dont la propriété author égale à 'guillaume' \n et la propriété publisheAt égale à la date du jour.", function() {
            feedService.parseFeed("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9e8f2478bffb49bc92f9c43f75ceadbb").then(function (res) {
                expect(res.data.articles[0].author === "guillaume");
                expect(res.data.articles[0].publishiedAt === new Date());
            });
            $httpBackend.flush();
        });
    });

})
