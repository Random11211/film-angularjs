app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<now-playing></now-playing>'
        })
        .when('/search=:query', {
            template: '<search-results></search-results>'
        })
        .when('/movies-list', {
            template: '<movies-library></movies-library>'
        })
        .when('/details/:id', {
            template: '<movie-details><movie-details>'
        })
        .otherwise({ redirectTo: '/' });;
}]);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('movies-app');
}])