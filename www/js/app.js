// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','ngCordova']);
var db = null;
app.run(function($ionicPlatform, $cordovaSQLite,serviceDB) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    /*db = $cordovaSQLite.openDB("my.db");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");*/
    /*if (window.cordova) {
        db = $cordovaSQLite.openDB( 'accounts.db', 1 );
    } else {
        //db = window.openDatabase('accounts', '1.0', 'accounts.db', 100 * 1024 * 1024);
        db = window.sqlitePlugin.openDatabase({name: 'accounts.db', location: 'default'});
    }*/ 
    /*db = window.openDatabase("accounts.db", "1", "Demo SQLite Test", "2000");

    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS chat_channel(id interger primary key, chat_room text, last_text text, username text, chat_channel text unique)");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS chat_content(id integer primary key, content text, channel text, chat_flag integer, username text, date timestamp)");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");*/
    serviceDB.init($cordovaSQLite);


    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
