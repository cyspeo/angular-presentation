angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("feed-detail.html","<h1>Détail d\'un article</h1>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <dl>\r\n            <dt>Auteur: </dt>\r\n            <dd>{{feed.author}}</dd>\r\n            <dt>Titre: </dt>\r\n            <dd>{{feed.title}}</dd>\r\n            <dt>Description: </dt>\r\n            <dd>{{feed.description}}</dd>\r\n            <dt>url: </dt>\r\n            <dd>{{feed.url}}</dd>\r\n            <dt>url Image: </dt>\r\n            <dd>{{feed.urlToImage}}</dd>\r\n            <dt>Date de publication: </dt>\r\n            <dd>{{feed.publishedAt}}</dd>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <a class=\"btn btn-primary\" href=\"#/\">Retour</a> \r\n    </div>\r\n</div>\r\n");
$templateCache.put("feed-list.html","<div>\r\n    <div class=\"row-fluid\">\r\n        <h1>Feed Reader using AngularJS</h1>\r\n        <form class=\"form-horizontal\" name=\"myForm\">\r\n            <div class=\"form-group \">\r\n                <div class=\"input-group col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"feedSrc\" placeholder=\"Enter Feed URL\" data-ng-model=\"feedSrc\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-primary\" id=\"load-btn\" type=\"button\" ng-click=\"loadFeed()\">Load</button>\r\n                    </span>\r\n                    <div class=\" col-md-2\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"filter\" data-ng-model=\"filterText\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"list-group col-md-6\">\r\n            <a href=\"/#/detail?feed={{feed}}\" class=\"list-group-item\" \r\n            ng-repeat=\"feed in feeds | filter:filterText | orderBy:\'publishedAt\':true\">\r\n                <h4 class=\"list-group-item-heading\" ng-bind-html=\"feed.title | highlight:filterText\"> </h4>\r\n                <p class=\"list-group-item-text\" ng-bind-html=\"feed.description | highlight:filterText\"></p>\r\n                <small>{{feed.publishedAt | date:\'dd-MM-yyyy hh:mm\'}} </small>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>");}]);