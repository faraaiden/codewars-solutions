/*
============
INSTRUCTIONS
============
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = (arr) => arr.filter((el, index) => index % 2 === 0);

/*
====================
ALTERNATIVE SOLUTION
====================

const removeEveryOther = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  return newArr;
};
*/
