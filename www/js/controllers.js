//angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

app.controller('PlaylistsCtrl', function($rootScope, $cordovaNetwork,$scope,$timeout,$cordovaGeolocation, $cordovaSQLite,serviceDB) {
//whatsapps
$scope.whatsapps = function(){
  alert("whatsapps loading...");
  cordova.plugins.Whatsapp.send("9768431024");
}; 

//accuracy
/*cordova.plugins.locationAccuracy.canRequest(function(canRequest){
    if(canRequest){
        cordova.plugins.locationAccuracy.request(function(){
            console.log("Request successful");
            alert("Request successful");
        }, function (error){
            alert("Request failed");
            console.error("Request failed");
            if(error){
                // Android only
                alert("error code="+error.code+"; error message="+error.message);
                console.error("error code="+error.code+"; error message="+error.message);
                if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
                    if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
                        cordova.plugins.diagnostic.switchToLocationSettings();
                    }
                }
            }
        }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY // iOS will ignore this
        );
    }
});*/


//imei
/*$scope.imei = function(){
window.plugins.imei.get(
  function(imei) {
    alert("got imei: " + imei);
    console.log("got imei: " + imei);
  },
  function() {
    alert("error loading imei");
    console.log("error loading imei");
  }
);
};*/
//sim
/*$scope.sim = function(){
  window.plugins.sim.getSimInfo(successCallback, errorCallback);
};
function successCallback(result) {
  console.log(result);
  alert(result.phoneNumber + " & "+JSON.stringify(result));
}
 
function errorCallback(error) {
  console.log(error);
  alert(error);
}
$scope.permission = function(){
 hasReadPermission();
 requestReadPermission();
};
// Android only: check permission 
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
}
 
// Android only: request permission 
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}*/




  serviceDB.create($scope,$timeout,$cordovaSQLite);
  
    var isOffline = 'onLine' in navigator && !navigator.onLine;

if ( isOffline ) {
    console.warn("cordovaNetwork is offline:"+isOffline);
}
else {
    console.warn("cordovaNetwork is online:"+isOffline);
}

  $scope.geo1 = function(){
    serviceDB.trackmylocation($cordovaGeolocation);
  }
  $scope.geo2 = function(){
    serviceDB.trackmylocation2($cordovaGeolocation);
  }
  /*$timeout(function() {
      alert(window.sqlitePlugin);
    }, 1000);

    $timeout(function() {
      alert(window.sqlitePlugin);
    }, 2000);

    $timeout(function() {
      alert(window.sqlitePlugin);
    }, 3000);

    $timeout(function() {
      alert(window.sqlitePlugin);
    }, 4000);

    $timeout(function() {
      alert(window.sqlitePlugin);
    }, 5000);*/

  $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            alert("INSERT ID -> " + res.insertId);
        }, function (err) {
            alert(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                alert("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                alert("No results found");
            }
        }, function (err) {
            alert(err);
        });
    }

  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});

app.controller('PlaylistCtrl', function($scope, $stateParams) {
});
