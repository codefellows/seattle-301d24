'use strict';

let someData;

$.get('https://pokeapi.co/api/v2/pokemon/9', doThisAfter)

function doThisAfter(response) {
  addPokemonToPage(response);
}

function addPokemonToPage(obj){
  $('body').append(`<h1>${ obj.name } is the best!</h1>`);
}

/// higher-order functions

function doMath(num1, num2, theFunc) {
  return theFunc(num1, num2);
}

doMath(4, 5, function(a, b){return a + b})
doMath(4, 5, function(a, b){return a * b})
