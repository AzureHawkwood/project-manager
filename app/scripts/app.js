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
    'ngNamedRoute',  //On peut définir des noms aux routes grâve au module angular-named-route
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        name: 'manager',
        templateUrl: 'views/manager/manager.html',
        controller: 'ManagerController',
        controllerAs: 'ManagerCtrl',
        animation: 'slide'
      })
      .when('/login', {
        name: 'login',
        templateUrl: 'views/login/login.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        animation: 'slide'
      })
      .when('/register', {
        name: 'register',
        templateUrl: 'views/register/register.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        animation: 'slide'
      })
/*
      .when('/logout', {
        name: 'logout',
        templateUrl: 'views/login/login.html',
        controller: 'LogoutController',
        controllerAs: 'LogoutCtrl'

      })
*/

      .when('/logout', {
        name: 'logout',
        template: " ",
        controller: 'LogoutController',
        controllerAs: 'LogoutCtrl'

      })

/*
      when('/logout', {
            resolve: {
                logout: ['logoutService', function (logoutService) {
                    logoutService();
                }]
            },
        })*/


      .when('/item/:id', {
        name: 'itemView',
        templateUrl: 'views/item/item.html',
        controller: 'ItemController',
        controllerAs: 'ItemCtrl',
        animation: 'slide'
      })
      .when('/task/:id', {
        name: 'taskView',
        templateUrl: 'views/task/task.html',
        controller: 'TaskController',
        controllerAs: 'TaskCtrl',
        animation: 'slide'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
