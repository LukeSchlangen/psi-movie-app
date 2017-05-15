app.service('favoritesService', ['$http', function($http){
  var self = this;

  // Creating an empty object as a placeholder for data that will be returned
  // empty object makes it soe that the view doesn't get angry
  self.favorites = { list: [] };

  self.getFavorites = function() {
    console.log('Hit the get favorites function in the service');
    $http({
      method: 'GET',
      url: '/favorites'
    }).then(function(response) {
      self.favorites.list = response.data;
    })
  };

  self.getFavorites();

  // Making a call to our server to add a new favorite
  self.saveFavorite = function(movie) {
    console.log('Hit the save favorite function in the service!');
    console.log('Movie to save is:', movie);
    $http({
      method: 'POST',
      url: '/favorites',
      data: movie
    }).then(function(response) {
      console.log(response);
      self.getFavorites();
    });
  };
}]);
