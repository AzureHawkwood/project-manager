'use strict';

/*
 *Directive utilisée pour vérifier que 2 champs sont identiques
 *Par exemple utile pour le formulaire d'enregistrement pour vérifier les 2 mots de passe
 */

angular.module('projectManagerApp').directive('match', ['$parse', function ($parse) {
    
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl) {
            if(!ctrl || !attrs.match) {
                return;
            }

            var matchGetter = $parse(attrs.match);
            var caselessGetter = $parse(attrs.matchCaseless);
            var noMatchGetter = $parse(attrs.notMatch);
            var matchIgnoreEmptyGetter = $parse(attrs.matchIgnoreEmpty);

            scope.$watch(getMatchValue, function(){
                ctrl.$$parseAndValidate();
            });

            ctrl.$validators.match = function(modelValue, viewValue){
              var matcher = modelValue || viewValue;
              var match = getMatchValue();
              var notMatch = noMatchGetter(scope);
              var value;

              if (matchIgnoreEmptyGetter(scope) && !viewValue) {
                return true;
              }

              if(caselessGetter(scope)){
                value = angular.lowercase(matcher) === angular.lowercase(match);
              }else{
                value = matcher === match;
              }
              /*jslint bitwise: true */
              value ^= notMatch;
              /*jslint bitwise: false */
              return !!value;
            };

            function getMatchValue(){
                var match = matchGetter(scope);
                if(angular.isObject(match) && match.hasOwnProperty('$viewValue')){
                    match = match.$viewValue;
                }
                return match;
            }
        }
    }

  }]);












