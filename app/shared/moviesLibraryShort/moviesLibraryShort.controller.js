app.controller('MoviesLibraryShortController', ['moviesLibraryFactory', function (moviesLibraryFactory) {
    var ctrl = this;
    ctrl.moviesLibrary = moviesLibraryFactory.getMoviesList();

    /*ctrl.getMoviesLibrary = function() {
        ctrl.moviesLibrary = moviesLibraryFactory.getMoviesList();
    };*/

    ctrl.removeMovie = function (movie) {
        moviesLibraryFactory.removeMovie(movie.id);
        //$scope.getMoviesLibrary();
    }

    ctrl.propertyName = 'original_title';
    ctrl.reverse = true;

    ctrl.sortBy = function (propertyName) {
        ctrl.reverse = (propertyName !== null && ctrl.propertyName === propertyName) ? !ctrl.reverse : false;
        ctrl.propertyName = propertyName;
    };

    // ctrl.getMovieByMonth = function (value) {
    //     console.log(value);
    //     ctrl.moviesLibrary = ctrl.moviesLibrary.filter(function (movie) {
    //         var month = movie.release_date.split('-');
    //         console.log(month[1]);
    //         if(value == month[1]){
    //             ...
    //         }
    //     })
    // }

    //ctrl.$onInit = function() {
    //   ctrl.getMoviesLibrary();
    //}
}]);