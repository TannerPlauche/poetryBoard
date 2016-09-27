var app = angular.module("PoetryApp", ["ngRoute", "PoetryAppAuth"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "partials/home.html"
  }).when("/categories", {
    templateUrl: "partials/categories.html"
  }).when("/submit_new", {
    templateUrl: "partials/submitPoem.html"
  }).when("/profile", {
    templateUrl: "partials/profile.html"
  }).when("/signup", {
    templateUrl: "partials/signup.html",
    controller: "SignupController"
  }).when("/log_in", {
    templateUrl: "partials/login.html",
    controller: "LoginController"
  }).when("/log_out", {
    templateUrl: "partials/logout.html"
  }).when("/about_the_board", {
    templateUrl: "partials/aboutTheBoard.html"
  }).when("/category/:roomId", {
    templateUrl: "partials/categoriesDetail.html"
  }).when("/:poemId", {
    templateUrl: "partials/poemDetail.html"
  })
});

app.controller("MainController", ["$scope", "MainService", function ($scope, MainService) {
  $scope.poemCategories = MainService.poemCategories
  $scope.poemId = 1234567890;
}])