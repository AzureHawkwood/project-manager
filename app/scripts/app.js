'use strict';

/**
 * @ngdoc overview
 * @name projectManagerApp
 * @description
 * # projectManagerApp
 *
 * Main module of the application.
 */
angular
  .module('projectManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngNamedRoute',  //On peut définir des noms aux routes grâce au module angular-named-route
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        name: 'manager',
        templateUrl: 'views/manager.html',
        controller: 'ManagerController',
        controllerAs: 'ManagerCtrl',
        //animation: 'slide'
      })
      .when('/action/:task_id/:item_id', {
        name: 'actionView',
        templateUrl: 'views/action.html',
        controller: 'ActionController',
        controllerAs: 'ActionCtrl',
        //animation: 'slide'
      })
      .when('/item/:id', {
        name: 'itemView',
        templateUrl: 'views/item.html',
        controller: 'ItemController',
        controllerAs: 'ItemCtrl',
        //animation: 'slide'
      })
      .when('/task/:id', {
        name: 'taskView',
        templateUrl: 'views/task.html',
        controller: 'TaskController',
        controllerAs: 'TaskCtrl',
        //animation: 'slide'
      })
      .when('/404', {
        name: '404',
        templateUrl: 'views/404.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
        //animation: 'slide'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
