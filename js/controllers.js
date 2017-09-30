angular.module('App.controllers', [])
    .run(function($rootScope) {
      $rootScope.pageTitle = "Umang's Journey";
      $rootScope.showMenu = true;
    })
    .controller('IndexController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'LIVE FEED'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
      }
    }])
    .controller('profileController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'PROFILE'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));
      $scope.userImage = $scope.user.userImage;
    }])
    .controller('contactController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'CONTACT US'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

      function initMap() {
				alert("herer")
	        var coords = {lat: 40.7925077, lng: -73.9519218};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          	zoom: 14,
	          	center: coords
	        });
	        var marker = new google.maps.Marker({
	          	position: coords,
	          	map: map
	        });
	    }
    }])
    .controller('picController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'GALLERY'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

    }])
    .controller('feedController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'FEEDBACK'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

    }])
    .controller('settingsController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'SETTINGS'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

    }])
    .controller('donateController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'DONATE'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

    }])
    .controller('contributeController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'CONTRIBUTE'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

    }])
    .controller('timelineController', ['$scope','$http','$route','$window','$location', '$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      if(uauth)
      {
        $rootScope.pageTitle = 'TIMELINE'
        $rootScope.showMenu = true;
      }
      else
      {
        $location.path('/login');
        return;
      }

      $scope.user = JSON.parse(localStorage.getItem("udet"));

    }])
    .controller('loginController', ['$scope','$http','$route','$window','$location','$rootScope', function ($scope,$http,$route,$window,$location,$rootScope) {
      var uauth = checkUserAuthentication();
      $rootScope.pageTitle = 'LOGIN';
      $rootScope.showMenu = false;
      if(uauth)
      {
        $location.path('/');
      }
    }])
    .controller('navbarcontroller', ['$scope','$routeParams','$http','$location','$window','$rootScope', function ($scope,$routeParams,$http,$location,$window,$rootScope)
    {

    }])
    .controller('signupController', ['$scope','$routeParams','$http','$location','$window','$rootScope','$route', function ($scope,$routeParams,$http,$location,$window,$rootScope,$route) {
        var uauth = checkUserAuthentication();
        $rootScope.pageTitle = 'SIGNUP';
        $rootScope.showMenu = false;
        if(uauth)
        {
          $location.path('/');
        }
        $scope.authenticateFacebook = function(){
          if (window.fb_status === 'connected') {
            $scope.facebook_user_login();
          }
          else if (window.fb_status === 'not_authorized') {
            FB.login(function(response) {
              $scope.facebook_user_login();
            },{scope: 'public_profile,email'});
          }
          else {
            FB.login(function(response) {
            $scope.facebook_user_login();
            },{scope: 'public_profile,email'});
          }
        }

        $scope.facebook_user_login = function() {
          FB.api('/me?fields=name,email,picture{url}', function(response) {
              var c = response.picture;
              var postdata = {};
              postdata['uimage']=c.data["url"];
              postdata['uname']=response.name;
              postdata['uemail']=response.email;
              var urlpost = "http://localhost:5000/user/authorized";
              var method = "POST";
              var async = true;
              var request = new XMLHttpRequest();
              request.onload = function () {
                var statusser = request.status;
                var databack = JSON.parse(request.responseText);
                localStorage.setItem('udet', JSON.stringify(databack["udata"]));
                $route.reload();
              }
              request.open(method, urlpost, async);
              request.setRequestHeader("Content-Type", "applicatoin/json;charset=UTF-8");
              request.send(JSON.stringify(postdata));
          });
        }

        //google sign in
				$scope.google_user_login = function(googleUser) {
          console.log(googleUser);
				  var profile = googleUser.getBasicProfile();
				  var urlpost = "http://localhost:5000/user/authorized";
				  var method = "POST";
				  var postdata = {};
				  postdata['uname']=profile.getName();
				  postdata['uemail']=profile.getEmail();
				  postdata['uimage']=profile.getImageUrl();
				  var async = true;
				  var request = new XMLHttpRequest();
				  request.onload = function () {
				    var statusser = request.status;
            var databack = JSON.parse(request.responseText);
            localStorage.setItem('udet', JSON.stringify(databack["udata"]));
            setTimeout(function(){
              $route.reload();
            },1000)
				  }
				  request.open(method, urlpost, async);
				  request.setRequestHeader("Content-Type", "applicatoin/json;charset=UTF-8");
				  request.send(JSON.stringify(postdata));
				}

				$scope.authenticateGoogle = function() {
			    gapi.load('auth2', function(){
			      auth2 = gapi.auth2.init({
              fetch_basic_profile: true,
              scope: 'https://www.googleapis.com/auth/plus.login',
			        client_id: '625663423158-lgefij2epktq49q2eo3vahi4gma84nts.apps.googleusercontent.com'
			      });
			      attachSignin(document.getElementById('googlebtn'));
			    });
			  };

			  var googleUser = {};
			  function attachSignin(element) {
			    auth2.attachClickHandler(element, {},
			      function(googleUser) {
			        $scope.google_user_login(googleUser);
			      }, function(error) {
              console.log(error);
			      });
			  };

        $scope.authenticateGoogle();

    }])
    .controller('SignoutController', ['$scope','$routeParams','$http','$location','$route','$window', function ($scope,$routeParams,$http,$location,$route,$window) {
      var storage = window.localStorage;
      var userid = storage.getItem("userid");
      if(userid==null)
      {
        //route back to login page
        $location.path('/');
      }
      else
      {
        storage.clear();
        $window.location.reload();
      }

      }])
    .controller('ClassController', ['$scope','$routeParams','$http', function ($scope,$routeParams,$http) {
      $scope.params = $routeParams;
      console.log($scope.params.classid);
    }])
    .controller('ScheduleController', ['$scope','$routeParams','$http', function ($scope,$routeParams,$http) {
      $scope.params = $routeParams;
      console.log('scheduleer: '+$scope.params.classid);
    }])
    .controller('HelpSomeoneController', ['$scope','$http','$route','$window', function ($scope,$http,$route,$window) {
      var storage = window.localStorage;
      $scope.preloader = true;
      $scope.listofhelps = false;
      $http({
        url: 'https://parseapi.back4app.com/classes/helps?limit=999',
        method: "GET",
        headers: { 'X-Parse-Application-Id': 'Fdo6szLdxY1gndKElzfBljZoXvq1DRM84w8dwlvo', 'X-Parse-REST-API-Key': 'svq43qepgkP1S333jwJzCva6r2mPySuO2SdekWdr', 'Content-Type': 'application/json' },
        data: JSON.stringify({
          //for now nothing
        })
      }).success(function (data) {
        var datalist = data.results;
        //load the new data
        $scope.issuesresult = data.results;
        $scope.preloader = false;
        $scope.listofhelps = true;
      }).error(function (data) {
        $scope.preloader = false;
        $scope.listofhelps = true;
        Materialize.toast('Something went wrong', 2000);
      });
      $scope.reloadroute = function() {
        $route.reload();
      }
    }])
    .controller('HelpParamController', ['$scope','$routeParams','$http', function ($scope,$routeParams,$http) {
      $scope.issueview = false;
      $scope.preloader = true;
      $scope.params = $routeParams;
      $http({
        url: encodeURI('https://parseapi.back4app.com/classes/helps?where={"objectId":"'+$scope.params.qid+'"}'),
        method: "GET",
        headers: { 'X-Parse-Application-Id': 'Fdo6szLdxY1gndKElzfBljZoXvq1DRM84w8dwlvo', 'X-Parse-REST-API-Key': 'svq43qepgkP1S333jwJzCva6r2mPySuO2SdekWdr', 'Content-Type': 'application/json' },
        data: JSON.stringify({
          //for now nothing
        })
      }).success(function (data) {
        $scope.issueda = data.results[0];
        $scope.preloader = false;
        $scope.issueview = true;
      }).error(function (data) {
        $scope.preloader = false;
        $scope.issueview = true;
        Materialize.toast('Something went wrong.', 2000);
      });

    }])
    .controller('NeedHelpController',['$scope','$http', function($scope,$http) {
      $scope.helpform = true;
      $scope.helpresult = false;
      $scope.preloader = false;
      $scope.submit = function () {
        $scope.helpform = false;
        $scope.preloader = true;
        $http({
          url: 'https://parseapi.back4app.com/classes/helps',
          method: "POST",
          headers: { 'X-Parse-Application-Id': 'Fdo6szLdxY1gndKElzfBljZoXvq1DRM84w8dwlvo', 'X-Parse-REST-API-Key': 'svq43qepgkP1S333jwJzCva6r2mPySuO2SdekWdr', 'Content-Type': 'application/json' },
          data: JSON.stringify({
            title:$('#title').val(),
            description:$('#detailed').val(),
            name:$('#name').val(),
            phone:parseInt($('#phone').val())
          })
        }).success(function (data) {
          $scope.helpresultdesc = "Successfully added."
          $scope.preloader = false;
          $scope.helpresult = true;
        }).error(function (data) {
          $scope.helpresultdesc = "Something went wrong. Try again later."
          $scope.preloader = false;
          $scope.helpresult = true;
        });
      }
    }]);

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
};

function checkUserAuthentication(){
  if(localStorage.getItem("udet")){
    var udet = JSON.parse(localStorage.getItem("udet"));
    if(udet['signStatus'])
      return true;
    else
      return false;
  }
  else {
    return false;
  }
}
