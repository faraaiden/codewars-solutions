/*
============
INSTRUCTIONS
============
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

const isToday = (date) => date.toDateString() === new Date().toDateString();

/*
====================
ALTERNATIVE SOLUTION
====================

const isToday = date => {
  const today = new Date();
  return date.toDateString() === today.toDateString()
}
*/

/*
====
NOTE
====
The toDateString() method returns the date (not the time) of a date object as a string.

console.log(new Date()); // Sun May 01 2022 16:23:16 GMT+0700 (Western Indonesia Time)
console.log(new Date().toDateString()); // Sun May 01 2022
*/
