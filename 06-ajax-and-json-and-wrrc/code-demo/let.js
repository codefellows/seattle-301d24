'use strict';

/* Variable Declaration */
let undefinedThing;
let foo = 'bar';

/* Variable Reassignment */
foo = 'bang';

/* Variable Re-declaration */
let foo = 'bash'; // raises a SyntaxError

/* Variables are function scoped */
let flam = 'boyant';
function someFunc() {
  let flam = 'mable';
}
someFunc()
console.log(flam); // returns 'boyant'

/* Variables can be reassigned inside of functions */
let pot = 'ato';
function someFunc() {
  pot = 'latch';
}
someFunc()
console.log(pot); // returns 'latch'

/* Let variables are block scoped */
let cat = 'astrophe';
if (true) {
  let cat = 'atonic';
}
console.log(cat); // returns 'astrophe'

/* The above is the same for functions and loops */

/* Function expressions work in the same way */
let myName = function(first, last){
  return `${first} ${last}`;
}
