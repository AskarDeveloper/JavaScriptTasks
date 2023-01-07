'use strict';

/*
Write a JavaScript program to get the extension of a filename.
*/

// Method #1
const getFileExtension = (str) => {
  let acc = ''
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '.') {
      for (let index = i; index < str.length; index++) {
        acc += str[index]
      }
      return acc
    }
  }
};
console.log(getFileExtension('index.html'));
console.log(getFileExtension('style.css.scss'));



// Method #2

const getExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getExtension('index.html'));
console.log(getExtension('style.css.sass'));