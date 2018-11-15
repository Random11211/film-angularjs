app.controller('MoviesListController', ['moviesFactory', 'watchlistFactory', function (moviesFactory, watchlistFactory) {
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

    ctrl.addToWatchlist = function (movie) {
        watchlistFactory.addMovie(movie);
    };

    ctrl.isOnList = function (id) {
        var watchlist = watchlistFactory.getWatchlist();
        for (var i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id === id) {
                return true;
            }
        }

        return false;

    }

    ctrl.$onChanges = function (changes) {
        if (ctrl.list != null) {
            (ctrl.list).forEach(function (movie) {
                ctrl.getCredits(movie);
            });
        }

    }
}]);