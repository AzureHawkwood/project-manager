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
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/manager/manager.html',
        controller: 'ManagerController',
        controllerAs: 'ManagerCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginController',
        controllerAs: 'LoginCtrl'
      })
      .when('/register', {
        hoho: 'huhu',
        name: 'registerhu',
        templateUrl: 'views/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'RegisterCtrl'
      })
      .when('/item/:id', {
        templateUrl: 'views/item/item.html',
        controller: 'ItemController',
        controllerAs: 'ItemCtrl'
      })
      .when('/task/:id', {
        templateUrl: 'views/task/task.html',
        controller: 'TaskController',
        controllerAs: 'TaskCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
