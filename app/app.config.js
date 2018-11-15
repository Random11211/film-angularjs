app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<now-playing></now-playing>'
        })
        .when('/search=:query', {
            template: '<search-results></search-results>'
        })
        .when('/watchlist', {
            template: '<watchlist></watchlist>'
        })
        .otherwise({ redirectTo: '/' });
}]);

app.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('movies-app');
}]);