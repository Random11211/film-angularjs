app.controller('SearchController', ['$location',  function ($location) {
    var ctrl = this;
    ctrl.title;

    ctrl.searchMovies = function searchMovies(title) {
        if(ctrl.title != null) {
            var path = '/search=' + ctrl.title;
            $location.path(path);
        } else {
            alert("Enter title to search");
        }
    }
}]);