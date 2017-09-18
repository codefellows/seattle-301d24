'use strict';

/* Constant Declaration */
const UNDEFINEDTHING;
const FOO = 'bar';

/* Constant Reassignment */
FOO = 'bang'; // raises a TypeError

/* Constant Re-declaration */
const FOO = 'bash'; // raises a SyntaxError

/* Constants are function scoped */
const FLAM = 'boyant';
function someFunc() {
  const FLAM = 'mable';
}
someFunc()
console.log(FLAM); // returns 'boyant'

/* Constants CAN NOT be reassigned inside of functions */
const POT = 'ato';
function someFunc() {
  POT = 'latch';
}
someFunc() // raises a TypeError

/* Constants are block scoped */
const CAT = 'astrophe';
if (true) {
  const CAT = 'atonic';
}
console.log(CAT); // returns 'astrophe'

/* The above is the same for functions and loops */

/* Function expressions work in the same way */
const MY_NAME = function(first, last){
  return `${first} ${last}`;
}

/* Mutable values assigned to a constant may have their contents changed, but the value itself may not be changed */

/* strings, bools, and numbers are immutable */
const MY_STRING = 'words', MY_BOOL = false, MY_NUM = 5;

/* arrays and objects are mutable, but you still cannot reassign the variable name */
const MY_ARRAY = [], MY_LITERAL_OBJ = {}

function anObject () {return true};
const CONSTRUCTED = new anObject();

/* YOU CAN DO THESE */

MY_ARRAY.push(42);
MY_LITERAL_OBJ.newKey = 'chef';
CONSTRUCTED.flam = 'boyant';
