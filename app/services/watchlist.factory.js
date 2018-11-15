app.factory('watchlistFactory', ['localStorageService', function(localStorageService) {
    var watchlist = localStorageService.get('watchlist');
    

    return {
        getWatchlist: function() {
            if (watchlist == null) {
                watchlist = [];
            }
            return watchlist;
        },

        addMovie: function(movie) {
            if(watchlist.map(function(item) {return item.id;}).indexOf(movie.id) == -1) {
                watchlist.push(movie);
            }

            localStorageService.set('watchlist',watchlist);
        },

        removeMovie: function(id) {
            var removeIndex = watchlist.map(function(item) {return item.id;}).indexOf(id);
            watchlist.splice(removeIndex, 1);

            localStorageService.set('watchlist', watchlist);
        }

    };
}])