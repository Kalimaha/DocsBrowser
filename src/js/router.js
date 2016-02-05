(function () {

    'use strict';

    var app = angular.module('NYTBestSellers', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/genres', {
            templateUrl: 'src/html/genres.html',
            controller: 'GenresController'
        }).when('/genres/:genre', {
            templateUrl: 'src/html/genre.html',
            controller: 'GenreController'
        }).when('/genres/:genre/:isbn', {
            templateUrl: 'src/html/book.html'
        }).otherwise({
            redirectTo: '/genres'
        });
    });

}());