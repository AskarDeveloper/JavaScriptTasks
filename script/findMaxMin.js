'use strict'
//JavaScript Task find MAX MIN
// askar.developer@gmail.com

const array = [1, 4, 46, 76, 3, 899, 5, 2, 8, 10, 1000, 67, 101, 0, -68];

// findMax with for in
function findMax(arr) {
  let acc = 0
  for (let i in arr) {
    if (arr[i] > acc) {
      acc = arr[i]
    }
  }
  console.log(acc + ' for in findMax')
};
findMax(array);

// findMax with for
function findArrMax(arr) {
  let acc = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > acc) {
      acc = arr[i]
    }
  }
  console.log(acc + ' for findMax')
};
findArrMax(array);

// findMax with while
function findArrayMax(arr) {
  let acc = 0
  let i = 0
  while (i < arr.length) {
    if (arr[i] > acc) {
      acc = arr[i]
    }
    i++
  }
  console.log(acc + ' while findMax')
};
findArrayMax(array);

// findMax with JS Math
console.log(Math.max(...array) + ' Math findMax');


// find min
function findMin(arr) {
  let acc;
  for (let i in arr) {
    if (acc === undefined || arr[i] < acc) {
      acc = arr[i]
    }
  }
  console.log(acc + ' for in findMin')
};
findMin(array);

//find min through Math
console.log(Math.min(...array) + ' Math findMin');