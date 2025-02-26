console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
console.log(helloName('Stacy'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(14, 4));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree(2, 5, 10));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array.length > 0 ) {
    return array[array.length-1];
  }
}
let coolArray = [1, 2, 3, 5];
console.log(getLast(coolArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ) {
  for(let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  } return false;
}
let aCoolArray = ['Jimmy', 'Tony', 'Daniel', 'Sarah'];
console.log(find('Daniel', aCoolArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if( string.charAt(0) === letter ) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  // TODO: loop to add items
  for(let n of array) {
    sum += n;
  }
  return sum;
}
crazyArray = [100, 5, 0.25, -5];
console.log(sumAll(crazyArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray ( array ) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let positiveNumbers = [-1, -4, 5, 0, -100009, 100, 24]; //example
let noPositiveNumbers = [-1, -5, 0, -200]; //example
console.log('The positive numbers of positiveNumbers is/are:', positiveArray(positiveNumbers));
console.log('The positive numbers of noPositiveNumbers is/are:', positiveArray(noPositiveNumbers));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/*Create a function which returns the number of true values there are in an array.*/
/*
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/


let trueOrFalse = [true, false, true, false, false, false, false, false, true, true, false]; //4
let emptyArray = []; //return 0
function countTrue(values) {
  let count = 0;
  for ( let n of values ) {
    count += n;
  }
  return count;
}
console.log(countTrue(trueOrFalse));
console.log(countTrue(emptyArray));