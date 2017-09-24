angular.module('App.controllers', [])
    .controller('HomeController', ['$scope','$http','$route','$window','$location', function ($scope,$http,$route,$window,$location) {
      console.log('in controll baby');
    }])
    .controller('SigningController', ['$scope','$http','$route', function ($scope,$http,$route) {
      //hit the back end to check for signed in status
      $http({
        url: 'http://192.168.0.11:5000/checksign?uid=1',
        method: 'GET'
      }).success(function(data){
        if(data=='illada'){
          $scope.signingstat = "You have not signed in yet!";
          $scope.btncolor = 'green';
          $scope.btnval = 'Sign in';
        }
        else {
          $scope.signingstat = data.cevent;
          $scope.btncolor = 'red';
          $scope.btnval = 'Sign out';
        }
      }).error(function (data) {
        console.log('something went wrong '+data);
      });
      $scope.scan = function() {
        cordova.plugins.barcodeScanner.scan(
          function (result) {
              if(!result.cancelled)
              {
                  if(result.format == "QR_CODE")
                  {
                    $http({
                      url: 'http://192.168.0.11:5000/signinqrcode?fullraw="'+result.text+'"&uid=1',
                      method: 'GET'
                    }).success(function(data) {
                      //validate the returned data value
                      if(data=='invalid')
                      {
                        alert('invalid qr code.');
                      }
                      else
                      {
                        $route.reload();
                      }
                    }).error(function(data) {
                      //nothing to do
                      console.log(data);
                    })
                  }
              }
          },
          function (error) {
              alert("Scanning failed: " + error);
          }
       );
      }
    }])
    .controller('HeaderController', ['$scope','$window', function ($scope,$window) {
      console.log('wow da in header controller');
    }]);
