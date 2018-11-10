app.factory('moviesFactory', ['$http', function ($http) {
    var apiKey = '15cb621';
    var apiURL = 'http://www.omdbapi.com/';
    var url = apiURL + '?apikey=' + apiKey;
    var moviesFactory = {};

    moviesFactory.getMovie = function (id) {
        return $http.get(url + '&i=' + id);
    };

    moviesFactory.getMovies = function (search) {
        return $http.get(url + '&s=' + search);
    };

    return moviesFactory;
}]);