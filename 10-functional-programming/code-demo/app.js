'use strict';

/*
Functional Programming - use functions to achieve your goals without modifying the state of any one object.
*/

let nick = {};

function addLegs(person) {
  let newPerson = Object.assign({}, person)
  newPerson.legs = 2;
  return newPerson;
}

addLegs(nick);

/* Object Oriented Programming */

/* Modify an object's properties/state as you please */

/* Relevant Array Methods
- .forEach
- .map
- .filter
- .reduce
*/

// forEach - perform an operation for each element in the array
let myArr = [{}, {}, {}, {}, {}];
let anotherArr = [];

myArr.forEach(function(item, idx, theActualArrayItself){
  item.flerg = 'blerg';
})

// map - perform an operation *on* each element in the array and return the modified array
let nums = [1, 2, 3, 4, 5];
nums.map(function(num){
  return num * 2;
}) // -> [2, 4, 6, 8, 10]

// the above is roughly equal to this
let newArray = [];
for (var i = 0; i < nums.length; i++) {
  newArray.push(nums[i] * 2);
}

// filter - return only elements from the array where the function provided returns true
nums.filter(function(num){
  return num > 3;
}) // -> [4, 5]

let pets = [
  {species: 'cat', name: 'snowball', age: 5},
  {species: 'cat', name: 'tiger', age: 7},
  {species: 'dog', name: 'spot', age: 3},
  {species: 'dog', name: 'cat', age: 12},
  {species: 'bird', name: 'tweety', age: 90}
];
pets.filter(function(animal){
  return animal.species === 'cat';
}) // -> [{species: 'cat', name: 'snowball'}, {species: 'cat', name: 'tiger'}]


// reduce - aggregate all objects in your array into one object
nums.reduce(function(firstNum, secondNum){
  return firstNum + secondNum;
}) // -> 15

nums.reduce(function(aggregator, value){
  return aggregator + value;
}) // -> 15

nums.reduce(function(aggregator, value){
  return aggregator + value;
}, 100) // -> 115

var flattened = [[0, 1], [2, 3], [4, 5]];
flattened.reduce(function(aggregator, oneArray){
  return aggregator.concat(oneArray);
}, [])

var names = ['shiela', 'daemeon', 'björn', 'felix', 'bob'];
names.reduce(function(aggregator, name, index){
  aggregator[index] = name
  return aggregator;
}, {})

/* chaining! */
pets
  .filter(function(animal){
    return animal.species === 'cat';
  })
  .map(function(animal){
    return animal.name;
  })
  .reduce(function(aggregator, name){
    return `${aggregator} \n\t ${name}`;
  }, 'Cat Names: ')

  pets
    .filter(animal => animal.species === 'cat')
    .map(animal => animal.name)
    .reduce((aggregator, name) => `${aggregator} \n\t ${name}`, 'Cat Names: ')



/* ARROW FUNCTIONS! */
(param1, param2, etc.) => {
  // code that executes
  // you can return things too if you want!
}
() => { // no parameters
  // code
}

// All of what follows is equivalent (to a degree...)
pets.filter(function(animal) { // if and only if you have one parameter
  return animal.species === 'cat';
})
pets.filter((animal) => { // if you have any number of parameters
  return animal.species === 'cat';
})
pets.filter(animal => { // if and only if you have one parameter
  return animal.species === 'cat';
})
pets.filter(animal => animal.species === 'cat'); // if and only if you intend to return what comes after the arrow.

// let isOdd = num => num % 2 ? true : false;

// Note: arrow functions can in fact be used as IIFEs
// They work like regular functions in every way except for what's listed below...

/*
Things Arrow Functions CANNOT Do
- Cannot create object constructors
- Cannot bind the keyword "this"
- Probably not a good idea to use them for object methods
*/
