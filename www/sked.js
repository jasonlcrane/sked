// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('sked', [
  'ionic',
  'contentful',
  'uiGmapgoogle-maps'
])
.config(function(contentfulProvider){
    contentfulProvider.setOptions({
        space: 'xucmbgowiyls',
        accessToken: 'b2c5f20e0e8c5bd46f9e0f1567754a6bdff2636568bbcf13ecf67cf420e9de90'
    });
  })
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url:'/home',
      templateUrl: 'modules/home/home.tmpl.html',
      controller: 'HomeCtrl as home'
    });

    $urlRouterProvider.otherwise('/home');
  })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
