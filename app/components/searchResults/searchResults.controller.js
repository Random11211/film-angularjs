app.controller('SearchResultsController', ['$routeParams', 'moviesFactory', function ($routeParams, moviesFactory) {
    var ctrl = this;
    ctrl.title = $routeParams.query;
    ctrl.movies;

    ctrl.searchMovies = function searchMovies() {
        // var title = $routeParams.query;
        var queryString = ctrl.title.replace(/ /g, '+');
        moviesFactory.getMovies(queryString)
            .then(function (response) {
                ctrl.movies = response.data.results;
            }, function (error) {
                console.log("ERROR:" + error.message);
            });
    };

    ctrl.$onInit = function () {
        ctrl.searchMovies();
    }
}]);