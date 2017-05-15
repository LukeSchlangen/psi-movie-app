var app = angular.module('movieApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/search', {
      template: '<h2>Search Page is Here!</h2>',
      controller: 'searchController',
      controllerAs: 'vm'
    })
    .when('/favorites', {
      template: '<h2>Favorites Page is Here!',
      controller: 'favoritesController',
      controllerAs: 'vm'
    })
    .otherwise({
      template: '<h2>That is a 404!</h2>'
    })
}]);

app.controller('searchController', function() {
  console.log('Made it to the searchController');
});

app.controller('favoritesController', function() {
  console.log('Made it to the favoritesController');
});
