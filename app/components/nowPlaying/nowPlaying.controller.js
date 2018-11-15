app.controller('NowPlayingController', ['moviesFactory', function (moviesFactory) {
    var ctrl = this;
    ctrl.nowPlayingList;

    ctrl.getNowPlaying = function() {
        moviesFactory.getNowPlaying()
            .then(function (response) {
                ctrl.nowPlayingList = response;
                
            }, function (error) {
                console.log(error);
            });
    };
    
    ctrl.$onInit = function() {
        ctrl.getNowPlaying();
    }
}]);