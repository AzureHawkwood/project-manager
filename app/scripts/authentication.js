'use strict';

/**
 * @ngdoc overview
 * @name projet7AlbumManagerApp
 * @description
 * # projet7AlbumManagerApp
 *
 * Main module of the application.
 */
angular
  .module('projet7AlbumManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngNamedRoute',  //On peut définir des noms aux routes grâce au module angular-named-route
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        name: 'index',
        templateUrl: 'views/login.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        animation: 'slide'
      })
      .when("/login", {
        name: 'login',
        templateUrl: 'views/login.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        animation: 'slide'
      })
      .when('/register', {
        name: 'register',
        templateUrl: 'views/register.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        animation: 'slide'
      })
      .when('/logout', {
        name: 'logout',
        template: " ",
        controller: 'LogoutController',
        controllerAs: 'LogoutCtrl'
      })
      .when('/404', {
        name: '404',
        templateUrl: 'views/404.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        animation: 'slide'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });