app.controller('MoviesLibraryShortController', ['moviesLibraryFactory', function (moviesLibraryFactory) {
    var ctrl = this;
    ctrl.moviesLibrary = moviesLibraryFactory.getMoviesList();

    /*ctrl.getMoviesLibrary = function() {
        ctrl.moviesLibrary = moviesLibraryFactory.getMoviesList();
    };*/

    ctrl.removeMovie = function(movie) {
        moviesLibraryFactory.removeMovie(movie.id);
        //$scope.getMoviesLibrary();
    }

    /*ctrl.sortBy = function (x){
        ctrl.attr = x;
        console.log(ctrl.attr);
    }*/
}]);