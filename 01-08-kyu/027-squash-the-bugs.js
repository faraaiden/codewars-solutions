/*
============
INSTRUCTIONS
============

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

FIX IT:

function findLongest(str) (
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
  }
  return longest
)

*/

const findLongest = (str) =>
  Math.max(...str.split(' ').map((word) => word.length)); // we split a string into some elements in an array form, then we modify every element to be the element's length, and last, we find max number among those elements (element/word with longest characters)

/*
=====================
ALTERNATIVE SOLUTIONS
=====================

function findLongest(str) {
  const spl = str.split(' ');
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

---------------------

const findLongest = str => {
  const arrOfWords = str.split(' ');
  let longest = 0;

  for (let word of arrOfWords) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
};

*/

/*
====
TEST
====
*/

console.log(findLongest('The quick white fox jumped around the massive dog')); // 7
console.log(findLongest('Take me to tinseltown with you')); // 10
console.log(findLongest('Sausage chops')); // 7
console.log(findLongest('Wind your body and wiggle your belly')); // 6
console.log(findLongest('Lets all go on holiday')); // 7
