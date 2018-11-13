app.factory('moviesFactory', ['$http', function ($http) {
    var apiKey = 'api_key=07fa2cb44a9888f1a8ab8c9b1170d593';
    var apiURL = 'https://api.themoviedb.org/3';
    var moviesFactory = {};

    moviesFactory.getMovie = function (id) {
        return $http.get(apiURL + '/movie/' + id + '?' + apiKey);
    };

    moviesFactory.searchMovies = function (search) {
        return $http.get(apiURL + '/search/movie?query=' + search + +'&' + apiKey +'&include_adult=false');
    };

    moviesFactory.getNowPlaying = function() {
        return $http.get(apiURL + '/movie/now_playing?' + apiKey);
    }

    moviesFactory.getCredits = function(id) {
        return $http.get(apiURL + '/movie/' + id + '/credits?' + apiKey);
    }

    // moviesFactory.sortBy = function(attr){
    //     return $http.get(apiURL + '/discover/movie?' + apiKey + 'sort_by=' + attr);
    // }
    return moviesFactory;
}]);