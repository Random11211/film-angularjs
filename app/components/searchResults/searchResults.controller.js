app.controller('SearchResultsController', ['$routeParams', 'moviesFactory', function ($routeParams, moviesFactory) {
    var ctrl = this;
    ctrl.title = $routeParams.query;
    ctrl.movies;

    ctrl.searchMovies = function searchMovies() {
        var queryString = ctrl.title.replace(/ /g, '+');
        moviesFactory.getMovies(queryString)
            .then(function (response) {
                ctrl.movies = response;
            }, function (error) {
                console.log(error);
            });
    };

    ctrl.$onInit = function () {
        ctrl.searchMovies();
    }
}]);