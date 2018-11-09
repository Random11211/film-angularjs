/*
app.controller('searchController', function($scope, $http){

    $scope.getMovies= function () {
        var apikey = '&apikey=15cb621';
        var type = '&type=movie'
        var search = 'Shrek';
        $http.get('http://www.omdbapi.com/?s=' + search + type + apikey)
            .then(function successCallback(response){
                $scope.response = response.data;
                console.log($scope.response);
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
        };
});*/