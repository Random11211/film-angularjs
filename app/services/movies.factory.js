app.factory('moviesFactory', ['$http', function ($http) {
    var apiKey = 'api_key=07fa2cb44a9888f1a8ab8c9b1170d593';
    var apiURL = 'https://api.themoviedb.org/3';
    var moviesFactory = {};

    moviesFactory.getMovie = function (id) {
        return $http.get(apiURL + '/movie/' + id + '?' + apiKey)
            .then(
                function (response) {
                    return response.data;
                },
                function (httpError) {
                    throw httpError.status + ' : ' + httpError.data;
                });
    };

    moviesFactory.getMovies = function (title) {
        return $http.get(apiURL + '/search/movie?query=' + title + '&' + apiKey + '&include_adult=false')
            .then(
                function (response) {
                    return response.data.results;
                },
                function (httpError) {
                    throw httpError.status + ' : ' + httpError.data;
                });
    };

    moviesFactory.getNowPlaying = function () {
        return $http.get(apiURL + '/movie/now_playing?' + apiKey)
            .then(
                function (response) {
                    return response.data.results;
                },
                function (httpError) {
                    throw httpError.status + ' : ' + httpError.data;
                });
    }

    moviesFactory.getCredits = function (id) {
        console.log(id);

        return $http.get(apiURL + '/movie/' + id + '/credits?' + apiKey)
            .then(
                function (response) {
                    return {
                        cast: response.data.cast,
                        crew: response.data.crew
                    };
                },
                function (httpError) {
                    throw httpError.status + ' : ' + httpError.data;
                });
    }

    // moviesFactory.sortBy = function(attr){
    //     return $http.get(apiURL + '/discover/movie?' + apiKey + 'sort_by=' + attr);
    // }
    return moviesFactory;
}]);