app.service('searchService', ['$http', function($http){
  var self = this;

  self.search = function() {
    console.log('Hit the search function in the service!');
  };
}]);
