app.controller('MoviesListController', ['moviesFactory', function (moviesFactory) {
    var ctrl = this;
    ctrl.nowPlayingList = [];

    ctrl.getNowPlaying = function() {
        moviesFactory.getNowPlaying()
            .then(function (response) {
                ctrl.nowPlayingList = response.data.results;
            }, function (error) {
                console.log("ERROR: " + error.message);
            });
    };

    ctrl.sortBy = function (x){
        ctrl.attr = x;
        console.log(ctrl.attr);
    }
    ctrl.$onInit = function() {
        ctrl.getNowPlaying();
    }
}]);