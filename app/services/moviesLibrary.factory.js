app.factory('moviesLibraryFactory', ['localStorageService', function(localStorageService) {
    var moviesList = localStorageService.get('moviesList');

    var sortMoviesList = function(list) {

    };

    return {
        getMoviesList: function() {
            if (moviesList != null) {
             //   moviesList = sortMoviesList(moviesList);
            } else {
                moviesList = [];
            }
            return moviesList;
        },

        addMovie: function(movie) {
            if(moviesList.map(function(item) {return item.id;}).indexOf(movie.id) == -1) {
                moviesList.push(movie);
            }
            //moviesList = sortMoviesList(moviesList);

            localStorageService.set('moviesList', moviesList);
        },

        removeMovie: function(id) {
            var removeIndex = moviesList.map(function(item) {return item.id;}).indexOf(id);
            moviesList.splice(removeIndex, 1);

            localStorageService.set('moviesList', moviesList);
        }

    };
}])