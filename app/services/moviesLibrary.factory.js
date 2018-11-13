app.factory('moviesLibraryFactory', ['localStorageService', function(localStorageService) {
    var sortMoviesList = function(list) {

    };

    return {
        getMoviesList: function() {
            var moviesList = localStorageService.get('moviesList');
            if (moviesList != null) {
                moviesList = sortMoviesList(moviesList);
            }

            return moviesList;
        },

        addMovie: function(movie) {
            var moviesList = this.getMoviesList();
            moviesList.push(movie);
            moviesList = sortMoviesList(moviesList);

            localStorageService.set('moviesList', moviesList);
        },

        removeMovie: function(id) {
            var moviesList = this.getMoviesList();
            var removeIndex = moviesList.map(function(item) {return item.id;}).indexOf(id);
            moviesList.splice(removeIndex, 1);

            localStorageService.set('moviesList', moviesList);
        }

    };
}])