app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<now-playing></now-playing>'
        })
        .when('/?search=:query', {
            template: '<users-list></users-list>'
        })
        .when('/movies-list', {
            template: '<movies-list></movies-list>'
        })
        .when('/details/:id', {
            template: '<movie-details><movie-details>'
        })
        .otherwise({ redirectTo: '/' });;
}]);