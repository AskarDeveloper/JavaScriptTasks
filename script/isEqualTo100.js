'use strict';
/*
Write a Javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
*/

// Method #1
function isEqualToHundred(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    return true
  }
  return false
};
console.log(isEqualToHundred(50, 100));
console.log(isEqualToHundred(50, 49));

// Method #2
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(8, 9));
console.log(isEqualTo100(88, 12));