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
  .config(function ($routeProvider, $httpProvider) {

    /* *************************************
    ULTRA IMPORTANT, ANGULAR SOUS IE NE FONCTIONNE PAS A CHAQUE REQUETE AJAX, IE VA CHERCHER DANS LE CACHE
    LES VALEURS, DU COUP, AUCUNE DES ACTIONS NE SEMBLE METTRE A JOUR QUOI QUE CE SOIT
    * *************************************/
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $routeProvider
      .when('/', {
        name: 'manager',
        templateUrl: 'views/manager.html',
        controller: 'ManagerController',
        controllerAs: 'ManagerCtrl',
      })
      .when('/reorder', {
        name: 'reorder',
        templateUrl: 'views/reorder.html',
        controller: 'ReorderController',
        controllerAs: 'ReorderCtrl',
      })
      .when('/action/:task_id/:item_id', {
        name: 'actionView',
        templateUrl: 'views/action.html',
        controller: 'ActionController',
        controllerAs: 'ActionCtrl',
      })
      .when('/item/:id', {
        name: 'itemView',
        templateUrl: 'views/item.html',
        controller: 'ItemController',
        controllerAs: 'ItemCtrl',
      })
      .when('/task/:id', {
        name: 'taskView',
        templateUrl: 'views/task.html',
        controller: 'TaskController',
        controllerAs: 'TaskCtrl',
      })
      .when('/404', {
        name: '404',
        templateUrl: 'views/404.html',
        controller: 'AuthenticationController',
        controllerAs: 'AuthenticationCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
