var app = angular.module('PoetryApp');

app.controller("LoginController", ['$location', '$scope', 'UserService', function ($location, $scope, UserService) {

  $scope.login = function (user) {
    //perform the login
    $scope.user = {
      username: $scope.username,
      password: $scope.password
    };
    UserService.login($scope.user).then(function (response) {
            $location.path('/');
      console.log(response);
    }, function (response) {
      alert('There was a problem logging in');
    });
  }

}]);