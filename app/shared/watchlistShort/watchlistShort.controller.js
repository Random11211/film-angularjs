app.controller('WatchlistShortController', ['watchlistFactory', '$location', function (watchlistFactory, $location) {
    var ctrl = this;
    ctrl.list = watchlistFactory.getWatchlist();

    ctrl.removeMovie = function (movie) {
        watchlistFactory.removeMovie(movie.id);
    }

    ctrl.propertyName = 'original_title';
    ctrl.reverse = true;

    ctrl.sortBy = function (propertyName) {
        ctrl.reverse = (propertyName !== null && ctrl.propertyName === propertyName) ? !ctrl.reverse : false;
        ctrl.propertyName = propertyName;
    };

}]);