'use strict';



angular.module('projectManagerApp').directive('autoresizeheight', function () {
    return {
      replace: false,
        restrict: 'A',
        link: function (scope, element, attr)
        {
            var w = angular.element($(window));
            
            element.height(w.height() - 100);
            //element.width(w.width()  - 100);
        }
  };
});

/*
angular.module('projectManagerApp').directive('autoResize', function () {
    return function (scope, element) {

    var w = angular.element($window);
    scope.getWindowDimensions = function () {
      return { 'h': w.height(), 'w': w.width() };
    };
    scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
      scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            
            scope.style = function () {
        return { 
                    'height': (newValue.h - 100) + 'px',
                    'width': (newValue.w - 100) + 'px' 
                };
      };
            
    }, true);
  
    w.bind('resize', function () {
      scope.$apply();
    });
  };
});
*/









