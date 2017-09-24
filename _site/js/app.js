angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider,$locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/signing', {
        templateUrl: 'partials/signing.html',
        controller: 'SigningController'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
    });
