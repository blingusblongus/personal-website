// Module

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "pages/main.html"
    })
    .when("/music", {
        templateUrl: "pages/music.html"
    })
});