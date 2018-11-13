app.controller('MoviesLibraryController', ['moviesLibraryFactory', function (moviesLibraryFactory) {
    var ctrl = this;
    ctrl.moviesLibrary = [];

    ctrl.getMoviesLibrary = function() {
        ctrl.moviesList = moviesLibraryFactory.getMoviesList;
        console.log(ctrl.moviesLibrary);
    };

    ctrl.addMovie = function(movie) {
        moviesLibraryFactory.addMovie(movie);0
    };

    ctrl.removeMovie = function(movie) {
        moviesLibraryFactory.removeMovie(movie.id);
    }

    /*ctrl.sortBy = function (x){
        ctrl.attr = x;
        console.log(ctrl.attr);
    }*/
    ctrl.$onInit = function() {
        ctrl.getMoviesLibrary();
    }
}]);