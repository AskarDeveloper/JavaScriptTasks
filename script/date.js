'use strict'

// Write a JavaScript program to get the current date.JavaScriptExpected output : dd/mm/yyyy.

const currentDate = (dates = new Date()) => {
  const date = dates.getDate()
  const month = dates.getMonth() + 1
  const year = dates.getFullYear()
  return `${date}/${month}/${year}`
};
console.log(currentDate());