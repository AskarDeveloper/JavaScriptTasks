'use strict';
//JavaScript Task find MAX MIN
// askar.developer@gmail.com
const bigArray = new Array(1_000_000).fill().map(() => Math.random() * 100);

// findMax with for
function findMax(arr) {
  let acc
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > acc || acc === undefined) {
      acc = arr[i]
    }
  }
  return acc
};
console.log(findMax(bigArray) + ' findMax with for');

// findMax with reduce + Math
console.log(bigArray.reduce((prev, curr) => Math.max(prev, curr)) + ' findMax reduce + Math');

//find min through reduce + Math
console.log(bigArray.reduce((prev, curr) => Math.min(prev, curr)) + ' findMin reduce + Math');

// find min for in (slowly then for)
function findMin(arr) {
  let acc
  for (let i in arr) {
    if (arr[i] < acc || acc === undefined) {
      acc = arr[i]
    }
  }
  return acc
};
console.log(findMin(bigArray) + ' findMin with for in (slowly!!!) ');