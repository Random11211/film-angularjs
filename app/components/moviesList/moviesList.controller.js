app.controller('MoviesListController', ['moviesFactory', 'moviesLibraryFactory', function (moviesFactory, moviesLibraryFactory) {
    var ctrl = this;

    function getCredits(movie) {
        var credits = [];

        moviesFactory.getCredits(movie.id)
            .then(function (response) {
                credits = response.data;
                movie.cast = getCast(credits);
                movie.directors = getDirectors(credits);
            }, function (error) {
                console.log("ERROR: " + error.message);
            });
        return credits;
    }

    function getCast(credits) {
        return credits.cast;
    }

    function getDirectors(credits) {
        var directors = [];

        (credits.crew).forEach(function (person) {
            if (person.job === 'Director') {
                directors.push(person);
            }
        });

        return directors;
    }

    ctrl.addToLibrary = function (movie) {
        moviesLibraryFactory.addMovie(movie);
    };

    ctrl.$onInit = function () {
        for (movie in ctrl.list) {
            movie.credits = getCredits(movie);
        }
    }
}]);