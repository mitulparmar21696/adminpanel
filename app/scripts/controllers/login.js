'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('loginCtrl', function ($scope,$location) {
    //=================================================================================
    //Function Declarations
    //=================================================================================
    $scope.login=login;
    //=================================================================================
    //Variable Declarations
    //=================================================================================


    //=================================================================================
    //Function Implementation
    //=================================================================================
    function login(){
      debugger;
      $location.path("/about" );
    }
  
  
  });
