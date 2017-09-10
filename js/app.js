angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'IndexController'
      })
      .when('/loginpage', {
        templateUrl: 'partials/loginpage.html',
        controller: 'LoginpageController'
      })
      .when('/signuppage', {
        templateUrl: 'partials/signuppage.html',
        controller: 'SignuppageController'
      })
      .when('/signout', {
        templateUrl: 'partials/signout.html',
        controller: 'SignoutController'
      })
      .when('/class/:classid', {
        templateUrl: 'partials/class.html',
        controller: 'ClassController'
      })

      .when('/schedule/:classid', {
        templateUrl: 'partials/schedule.html',
        controller: 'ScheduleController'
      })
      .when('/helpdata/:qid', {
        templateUrl: 'partials/helpdetails.html',
        controller: 'HelpParamController'
      })
      .when('/help_someone', {
        templateUrl: 'partials/help_someone.html',
        controller: 'HelpSomeoneController'
      })
      .when('/need_help', {
        templateUrl: 'partials/need_help.html',
        controller: 'NeedHelpController'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .directive('tabs', function() {
  		return {
  			restrict: 'A',
  			link: function(scope, element, attrs) {
  				angular.element('ul.tabs').tabs(scope.$eval(attrs.tabs));
  			}
  		};
  	})
  	.directive('collapsible', function () {
  		return {
  			restrict: 'A',
  			link: function(scope, element, attrs) {
  				angular.element('.collapsible').collapsible(scope.$eval(attrs.tabs));
  			}
  		}
  	});
