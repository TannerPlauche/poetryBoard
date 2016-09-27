angular.module("PoetryApp")
  .controller("PoemViewController", ["$scope", "$routeParams", "MainService", function ($scope, $routeParams, MainService) {
    $scope.poemId = $routeParams.poemId;
    $scope.getPoem = MainService.getPoemById($scope.poemId)
      .then(function (data) {
        console.log(data);
        $scope.poem = data;
      });
}])
  .directive("poemView", function () {
    return {
      restrict: "E",
      templateUrl: "js/directives/poemViewDirective/poemView.html",
      controller: "PoemViewController"
    };
  });