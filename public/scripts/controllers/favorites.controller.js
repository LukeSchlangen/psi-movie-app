app.controller('favoritesController', ['favoritesService', function(favoritesService) {
  console.log('Made it to the favoritesController');
  var self = this;
  self.favorites = favoritesService.favorites;
  self.removeFavorite = favoritesService.removeFavorite;
}]);
