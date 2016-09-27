angular.module("PoetryApp")
  .controller("SubmitPoemController", ["$scope", "MainService", function ($scope, MainService) {
    $scope.categories = MainService.poemCategories;
    $scope.category = {};


    $scope.submitPoem = function () {
      $scope.poem = {
        title: $scope.poemTitle,
        author: $scope.poemAuthor,
        poemText: $scope.poemText,
        category: $scope.category.roomId
      };
      MainService.submitPoem($scope.poem);
      console.log($scope.poem);
      console.log(MainService.submitResponse)
      $scope.poemTitle = "";
      $scope.poemAuthor = "";
      $scope.poemText = "";
      $scope.category = "";
    };

    //    $scope.postPoem = MainService.submitPoem($scope.poem);
  }])
  .directive("poemForm", function () {
    return {
      restrict: "E",
      templateUrl: "../frontend/js/directives/submitDirective/submitPoemForm.html",
      controller: "SubmitPoemController"
    }
  })