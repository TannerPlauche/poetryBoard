var app = angular.module('PoetryApp');

app.controller("SignupController", ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {

  $scope.passwordMessage = '';

  $scope.signup = function () {

    $scope.user = {
      username: $scope.username,
      password: $scope.password
    }

    if ($scope.user.password !== $scope.passwordRepeat) {
      $scope.passwordMessage = "Passwords do not match";
    } else {
      UserService.signup($scope.user).then(function (response) {
        $location.path('/');
      }, function (response) {
        alert('There was a problem signing up');
      });
    }
  }

}]);