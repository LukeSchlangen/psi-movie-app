app.controller('searchController', ['searchService', 'favoritesService', function(searchService, favoritesService) {
  console.log('Made it to the searchController');
  var self = this; // setting self so that 'this' never refers to the wrong thing
  self.search = searchService.search; // this connects the search function in the view and controller to the service
  self.searchResult = searchService.searchResult; // this connects the searchResults object in the view and controller to the service
  self.saveFavorite = favoritesService.saveFavorite;
}]);
