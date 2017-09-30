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
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'profileController'
      })
      .when('/timeline', {
        templateUrl: 'partials/timeline.html',
        controller: 'timelineController'
      })
      .when('/contributions', {
        templateUrl: 'partials/contributions.html',
        controller: 'contributeController'
      })
      .when('/participate', {
        templateUrl: 'partials/landing.html',
        controller: 'IndexController'
      })
      .when('/post-pics', {
        templateUrl: 'partials/post_pics.html',
        controller: 'picController'
      })
      .when('/donate', {
        templateUrl: 'partials/donate.html',
        controller: 'donateController'
      })
      .when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'settingsController'
      })
      .when('/send-feedback', {
        templateUrl: 'partials/feed.html',
        controller: 'feedController'
      })
      .when('/help', {
        templateUrl: 'partials/landing.html',
        controller: 'IndexController'
      })
      .when('/contact-us', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
      })
      .when('/terms-conditions', {
        templateUrl: 'partials/landing.html',
        controller: 'IndexController'
      })
      .when('/login', {
        templateUrl: 'partials/loginpage.html',
        controller: 'loginController'
      })
      .when('/signup', {
        templateUrl: 'partials/signuppage.html',
        controller: 'signupController'
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
