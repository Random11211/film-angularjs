app.component('moviesList', {
    templateUrl: 'app/components/moviesList/moviesList.html',
    controller: 'MoviesListController',
    bindings: {
        list: '<'
    }
})