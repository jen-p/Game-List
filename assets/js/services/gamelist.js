app.factory('gamelist', ['$http', function($http) {
  return $http.get('/assets/data/playerData.json')
  	.success(function(data){
  		return data;
  	})
  	.error(function(err) {
    	return err;
  	});
}]);