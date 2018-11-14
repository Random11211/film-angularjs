app.controller('MoviesListController', ['moviesFactory', 'moviesLibraryFactory', function (moviesFactory, moviesLibraryFactory) {
    var ctrl = this;

    ctrl.getCredits = function (movie) {
        moviesFactory.getCredits(movie.id)
            .then(function (response) {
                movie.cast = response.cast;
                movie.directors = ctrl.getDirectors(response.crew);
            }, function (error) {
                console.log(error);
            });
    }

    ctrl.getDirectors = function (crew) {
        var directors = [];

        crew.forEach(function (person) {
            if (person.job === 'Director') {
                directors.push(person);
            }
        });

        return directors;
    }

    ctrl.addToLibrary = function (movie) {
        moviesLibraryFactory.addMovie(movie);
    };

    ctrl.$onChanges = function (changes) {
        if(ctrl.list != null) {
            (ctrl.list).forEach(function (movie) {
                ctrl.getCredits(movie);
            });
        }
        
    }
}]);