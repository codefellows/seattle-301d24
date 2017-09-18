'use strict';

/* Variable Declaration */
var undefinedThing;
var foo = 'bar';

/* Variable Reassignment */
foo = 'bang';

/* Variable Re-declaration */
var foo = 'bash';

/* Variables are function scoped */
var flam = 'boyant';
function someFunc() {
  var flam = 'mable';
}
someFunc()
console.log(flam); // returns 'boyant'

/* Variables can be reassigned inside of functions */
var pot = 'ato';
function someFunc() {
  pot = 'latch';
}
someFunc()
console.log(pot); // returns 'latch'

/* Variables are not block scoped */
var cat = 'astrophe';
if (true) {
  var cat = 'atonic';
}
console.log(cat); // returns 'atonic'

/* The above is the same for functions and loops */

/* Function expressions work in the same way */
var myName = function(first, last){
  return `${first} ${last}`;
}
