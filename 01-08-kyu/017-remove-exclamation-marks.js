/*
============
INSTRUCTIONS
============
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

const removeExclamationMarks = str => str.replace(/!/g, '');

/*
===============
OTHER SOLUTIONS
===============

const removeExclamationMarks = (str) => {
  const result = [];

  for (let letter of str) {
    if (letter !== '!') result.push(letter);
  }

  return result.join('');
};

--------------

const removeExclamationMarks = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '!') result.push(str[i]);
  }

  return result.join('');
};

*/

/*
====
TEST
====
*/
console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('Hel!!!lo World!'));
console.log(removeExclamationMarks('Hello Wor!!!ld!'));

