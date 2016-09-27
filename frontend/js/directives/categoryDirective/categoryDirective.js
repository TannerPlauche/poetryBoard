angular.module("PoetryApp")
	.controller("CategoryDetailController", ["$scope", "$routeParams", "MainService", function ($scope, $routeParams, MainService) {
		//    $scope.categoryPoems = MainService.getPoemByCategory();
		$scope.currentCategoryId = $routeParams.roomId;
		$scope.categoryPoems = MainService.getPoemsByCategory($scope.currentCategoryId)
			.then(function (data) {
				$scope.categoryPoems = data
			});
  }])
	.directive("categoryDetail", function () {
		return {
			restrict: "E",
			templateUrl: "js/directives/categoryDirective/categoryDetail.html",
			controller: "CategoryDetailController"
		}
	})