var app = angular.module('movieApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'searchController',
      controllerAs: 'vm'
    })
    .when('/favorites', {
      templateUrl: 'views/favorites.html',
      controller: 'favoritesController',
      controllerAs: 'vm'
    })
    .otherwise({
      template: '<h2>That is a 404!</h2>'
    })
}]);
