'use strict';

/**
 * Ce filtre s'utilise de la sorte par exemple : {{ texte | cutLongString:true:25}}
 * value est utilisé à gauche du pipe, c'est le texte à couper
 * wordwise permet d'indiquer via un booleen si l'on coupe un mot en plein milieu ou non
 * max correspond au nombre max de lettres à afficher
 * tail est la chaine de texte que l'on rajoute à la fin si le texte a été coupé, " ..." par défaut
 */
angular.module('projet7AlbumManagerApp')
.filter('cutLongString', function () {

  return function (value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
        var lastspace = value.lastIndexOf(' ');
        if (lastspace != -1) {
          //Also remove . and , so its gives a cleaner result.
          if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
            lastspace = lastspace - 1;
          }
          value = value.substr(0, lastspace);
        }
    }
    
    return value + (tail || ' …');
  };


});

