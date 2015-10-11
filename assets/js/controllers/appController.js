app.controller('appController', ['$scope', function($scope){
	$scope.title = 'Jen Plays Games';
	$scope.games = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=sE1236C804C048AFC127EE0003D297864&steamid=76561197960434622&format=json';
}]);