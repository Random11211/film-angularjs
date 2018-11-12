app.controller('SearchController', ['$scope', 'moviesFactory', '$routeParams', function ($scope, $routeParams, moviesFactory) {
    $scope.title = $routeParams.query;
    $scope.movies;

    $scope.searchMovies = function searchMovies() {
        moviesFactory.getMovies($scope.title)
            .then(function (response) {
                $scope.movies = response.data;
                console.log(response.data);
            }, function (error) {
                console.log("ERROR: " + error.message);
            });
    }
}]);