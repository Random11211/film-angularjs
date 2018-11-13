app.controller('MovieDetailsController', [ 'moviesFactory', function (moviesFactory) {
    var ctrl = this;
    function getCredits() {
        moviesFactory.getCredits(ctrl.movie.id)
        .then(function (response){
            ctrl.credits = response.data;
            getCast();
            getDirectors();
        }, function(error) {
            console.log("ERROR: " + error.message);
        });
    }

    function getCast() {
        ctrl.movie.cast = ctrl.credits.cast;
    }

    function getDirectors() {
        var directors = [];

       ((ctrl.credits).crew).forEach(function(person){
            if (person.job === 'Director') {
                directors.push(person);
            }
        });

        ctrl.movie.directors = directors;
    }

    ctrl.$onInit = function() {
        getCredits();
    }

}]);