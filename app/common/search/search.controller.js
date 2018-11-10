app.controller('SearchController', ['$scope', 'moviesFactory', function ($scope, moviesFactory) {
    $scope.title;
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