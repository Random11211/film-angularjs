app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<now-playing></now-playing>'
        })
        .when('/?search=:query', {
            template: '<users-list></users-list>'
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