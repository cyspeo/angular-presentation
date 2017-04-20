angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("feed-list.html","<div class=\"row\">\r\n    <h1>Feed Reader using AngularJS</h1>\r\n    <form class=\"form-horizontal\" name=\"myForm\">\r\n        <div class=\"form-group \">\r\n            <div class=\"input-group col-md-10\">\r\n                <input type=\"text\" class=\"form-control\" name=\"feedSrc\" placeholder=\"Enter Feed URL\" ng-model=\"feedSrc\">\r\n                <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-primary\" id=\"load-btn\" ng-click=\"loadFeed()\">Load</button>\r\n                    </span>\r\n                <div class=\" col-md-2\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"filter\" ng-model=\"filterText\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"list-group col-md-6\">\r\n\r\n        <a href=\"#/detail?feed={{feed}}\" class=\"list-group-item\" ng-repeat=\"feed in feeds | filter:filterText | orderBy:\'publishedAt\':true\">\r\n            <img class=\"feed-image\" ng-src=\"{{feed.urlToImage}}\" width=\"70px\" height=\"50px\">\r\n            <h4 class=\"list-group-item-heading\" ng-bind-html=\"feed.title | highlight:filterText\"> </h4>\r\n            <p class=\"list-group-item-text\" ng-bind-html=\"feed.description | highlight:filterText\"></p>\r\n            <small>{{feed.publishedAt | date:\'dd-MM-yyyy hh:mm\'}} </small>\r\n        </a>\r\n    </div>\r\n</div>");
$templateCache.put("feed-detail.html","<h1>{{feed.title}}</h1>\r\n<div class=\"row\">\r\n    <iframe ng-src=\"{{currentUrl}}\" width=\"80%\" height=\"80%\"></iframe>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <a class=\"btn btn-primary\" href=\"#/\">Back</a> \r\n    </div>\r\n</div>\r\n");}]);