'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
      // $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');
  })
  .run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      current=1;
      debugger
      if (next.originalPath === "/login") {
        $rootScope.loginDone=false;
      }else{
        $rootScope.loginDone=true;
      }
    });
  });