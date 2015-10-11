app.controller('appController', ['$scope', 'gamelist', function($scope, gamelist){
	$scope.title = 'Jen Plays Games';
	
	gamelist.success(function(data){
		$scope.gamelist = data;
	});
}]);