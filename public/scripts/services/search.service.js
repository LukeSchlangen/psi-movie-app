app.service('searchService', ['$http', function($http){
  var self = this;

  // Creating an empty object as a placeholder for data that will be returned
  // empty object makes it soe that the view doesn't get angry
  self.searchResult = { details: [] };

  // Making a call to the OMDB api to return a list of movies based on our search text
  self.search = function(searchText) {
    console.log('Hit the search function in the service!');
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + searchText
    }).then(function(response) {
      console.log(response);
      self.searchResult.details = response.data.Search;
    });
  };
}]);
