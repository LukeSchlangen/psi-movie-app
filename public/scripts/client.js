// Creating the angular module that will act as our entire application
var app = angular.module('movieApp', ['ngRoute']);

// Angular configuration
app.config(['$routeProvider', function($routeProvider) {
  // we're bring in $routeProvider, which is a small part of ngRoute,
  // this allows us to do client-side navigation
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
