app.controller('searchController', ['searchService', function(searchService) {
  console.log('Made it to the searchController');
  var self = this;
  self.search = searchService.search;// This is not done yet
}]);
