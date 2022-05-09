/*
============
INSTRUCTIONS
============
>>> Goal: remove an exclamation mark from the end of string

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples:
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

const remove = string => string.replace(/!$/, '');

/*
===============
OTHER SOLUTIONS
===============

const remove = string => string.endsWith('!') ? string.slice(0, -1) : string; // if string ends with '!', return the string with the last exclamation '!' removed, otherwise, return the initial string

---------------

const remove = (string) => string[string.length - 1] === '!' ? string.slice(0, -1) : string;

---------------

const remove = (string) => {
  const output = [];

  for (let i = 0; i < string.length; i++) {
    if (!(i === string.length - 1 && string[i] === '!')) {
      output.push(string[i]);
    }
  }

  return output.join('');
};

*/

/*
====
TEST
====
*/

console.log(remove('Hi!')); // 'Hi'
console.log(remove('Hi!!!')); // 'Hi!!'
console.log(remove('!Hi')); // '!Hi'
console.log(remove('!Hi!')); // '!Hi'
console.log(remove('Hi! Hi!')); // 'Hi! Hi'
console.log(remove('Hi')); // 'Hi'
