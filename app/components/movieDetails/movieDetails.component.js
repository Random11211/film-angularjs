app.component('movieDetails', {
    templateUrl: 'app/components/movieDetails/movieDetails.html',
    controller: 'MovieDetailsController',
    bindings: {
        movie: '<'
    }
});