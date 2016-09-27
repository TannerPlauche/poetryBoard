var app = angular.module("PoetryApp");

//this service performs all main get and post requests

app.service("MainService", ["$http", function ($http) {

  this.poemCategories = [
    {
      roomName: "Love & Friendship",
      roomId: "loveandfriendship"
    }, {
      roomName: "Inspiration",
      roomId: "inspiration"
    },
    {
      roomName: "Stories & Ballads",
      roomId: "storiesandballads"
    },
    {
      roomName: "Faith & Reverence",
      roomId: "faithandreverence"
    },
    {
      roomName: "Home & Mother",
      roomId: "homeandmother"
    },
    {
      roomName: "Childhood & Youth",
      roomId: "childhoodandyouth"
    },
    {
      roomName: "Memory & Grief",
      roomId: "memoryandgrief"
    },
    {
      roomName: "Nature & Animals",
      roomId: "natureandanimals"
    },
    {
      roomName: "Philosophy",
      roomId: "philosophy"
    },
    {
      roomName: "western",
      roomId: "western"
    },
    {
      roomName: "Various",
      roomId: "various"
    },
    {
      roomName: "Haiku",
      roomId: "haiku"
    },
    {
      roomName: "Sonnets",
      roomId: "sonnets"
    },
    {
      roomName: "Free Verse & Slam",
      roomId: "freeVerseAndSlam"
    }
  ]

  this.poemsByCategory = [];
  this.poemById = [];
  this.submitResponse = [];

  this.getPoemsByCategory = function (categoryId) {
    return $http.get("http://localhost:9000/poemboard/category/" + categoryId)
      .then(function (response) {
        return response.data;
      })
  }

  this.getPoemById = function (poemId) {
    return $http.get('http://localhost:9000/poemboard/' + poemId).then(function (response) {
      return response.data;
    })
  }

  this.submitPoem = function (data) {
    $http.post('http://localhost:9000/poemboard/api/userpoem/', data)
      .then(function (response) {
        this.submitResponse = response.data;
      })
  }



}]);