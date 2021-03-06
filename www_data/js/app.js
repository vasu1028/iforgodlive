// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.live', {
        url: '/live',        
        views: {
          'menuContent': {
            templateUrl: 'templates/live.html',
            // controller: 'AppCtrl'
          }
        }
      })
      
      .state('app.audioMessages', {
        url: '/audioMessages',
        views: {
          'menuContent': {
            templateUrl: 'templates/audioMessages.html',
            // controller: 'AppCtrl'
          }
        }
      })

      .state('app.videoMessages', {
        url: '/videoMessages',
        views: {
          'menuContent': {
            templateUrl: 'templates/videoMessages.html',
            // controller: 'AppCtrl'
          }
        }
      })

      .state('app.audioSongs', {
        url: '/audioSongs',
        views: {
          'menuContent': {
            templateUrl: 'templates/audioSongs.html',
            // controller: 'AppCtrl'
          }
        }
      })

      .state('app.videoSongs', {
        url: '/videoSongs',
        views: {
          'menuContent': {
            templateUrl: 'templates/videoSongs.html',
            // controller: 'AppCtrl'
          }
        }
      })
      
      .state('app.meetings', {
        url: '/meetings',
        views: {
          'menuContent': {
            templateUrl: 'templates/meetings.html',
            // controller: 'AppCtrl'
          }
        }
      })

      .state('app.contactUs', {
        url: '/contactUs',
        views: {
          'menuContent': {
            templateUrl: 'templates/contactUs.html',
            // controller: 'AppCtrl'
          }
        }
      })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/live');
  });
