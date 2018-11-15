app.controller('WatchlistController', ['watchlistFactory', '$location', function (watchlistFactory, $location) {
    var ctrl = this;
    ctrl.list = watchlistFactory.getWatchlist();

}]);