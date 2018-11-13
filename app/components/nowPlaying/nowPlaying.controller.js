app.controller('NowPlayingController', ['moviesFactory', function (moviesFactory) {
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

    ctrl.$onInit = function() {
        ctrl.getNowPlaying();
    }
}]);