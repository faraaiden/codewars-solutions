/*
============
INSTRUCTIONS
============

>>> Goal: stringy strings

Write a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
- the string should start with a 1.
- a string with size 6 should return :'101010'.
- with size 4 should return : '1010'.
- with size 12 should return : '101010101010'.
- The size will always be positive and will only use whole numbers.

*/

const stringy = (size) => {
  let output = '';

  for (let i = 1; i <= size; i++) {
    if (i % 2 !== 0) {
      output += '1';
    } else {
      output += '0';
    }
  }

  return output;
};  


/*
====================
ALTERNATIVE SOLUTION
====================

const stringy = (size) => {
  const output = '';

  for(let i = 1; i <= size; i++) {
    output += i % 2;
  }

  return output;
}

*/
