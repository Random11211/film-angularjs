app.controller('MoviesListController', ['moviesFactory', 'watchlistFactory', '$scope', function (moviesFactory, watchlistFactory, $scope) {
    var ctrl = this;
    ctrl.review;
    ctrl.watchlist = watchlistFactory.getWatchlist();

    ctrl.getCredits = function (movie) {
        moviesFactory.getCredits(movie.id)
            .then(function (response) {
                movie.cast = response.cast;
                movie.directors = ctrl.getDirectors(response.crew);
            }, function (error) {
                console.log(error);
            });
    };

    ctrl.hasReview = function (movie) {
        if (ctrl.isOnList(movie.id)) {
            for (var i = 0; i < ctrl.watchlist.length; i++) {
                if (ctrl.watchlist[i].id === movie.id && typeof (ctrl.watchlist[i]).review !== 'undefined') {
                    movie.review = ctrl.watchlist[i].review;
                    return true;
                }
            }
            return false;
        }

    };

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

    ctrl.createReview = function (movie) {
        for (var i = 0; i < ctrl.watchlist.length; i++) {
            if (ctrl.watchlist[i].id === movie.id) {
                watchlistFactory.saveReview(ctrl.watchlist[i], ctrl.review);
            }
        }
        ctrl.review={};
    };

    ctrl.isOnList = function (id) {
        //var watchlist = watchlistFactory.getWatchlist();
        for (var i = 0; i < ctrl.watchlist.length; i++) {
            if (ctrl.watchlist[i].id === id) {
                //  console.log(ctrl.watchlist[i].review);
                return true;
            }
        }

        return false;

    };

    ctrl.$onChanges = function (changes) {
        if (ctrl.list != null) {
            (ctrl.list).forEach(function (movie) {
                ctrl.getCredits(movie);
            });
        }
    };

    ctrl.propertyName = 'original_title';
    ctrl.reverse = true;

    ctrl.sortBy = function (propertyName) {
        ctrl.reverse = (propertyName !== null && ctrl.propertyName === propertyName) ? !ctrl.reverse : false;
        ctrl.propertyName = propertyName;
    };

}]);