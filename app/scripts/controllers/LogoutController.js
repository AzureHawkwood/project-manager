'use strict';


angular.module('projet7AlbumManagerApp')
  .controller('LogoutController', function ($scope, $location, namedRouteService) {
    
   
  	$scope.init = function(){
      alert("logout");
      //Session.clear();
      $location.path(namedRouteService.reverse('login'));
    };
  	


    $scope.init();


    /*
    var init = function () {
       // check if there is query in url
       // and fire search in case its value is not empty
       alert("Logout");
        $location.path(namedRouteService.reverse('login'));
    };
    // and fire it after definition
    init();
    */



});
