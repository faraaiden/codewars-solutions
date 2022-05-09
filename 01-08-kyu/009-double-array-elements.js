/*
============
INSTRUCTIONS
============
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

const maps = arr => arr.map(el => el * 2);

/*
================
ANOTHER SOLUTION
================

const maps = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }

  return newArr;
};

*/
