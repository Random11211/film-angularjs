app.controller('NowPlayingController', ['moviesFactory', function (moviesFactory) {
    var ctrl = this;
    ctrl.nowPlayingList = [];


    ctrl.getNowPlaying = function() {
        moviesFactory.getNowPlaying()
            .then(function (response) {
                ctrl.nowPlayingList = response.data.results;
                console.log(ctrl.nowPlayingList);
            }, function (error) {
                console.log("ERROR: " + error.message);
            });
    }

    ctrl.getNowPlaying();

}]);