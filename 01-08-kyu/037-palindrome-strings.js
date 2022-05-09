/*
============
INSTRUCTIONS
============

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

const isPalindrome = (line) => {
  const lineToStr = line.toString();
  let reverseLine = '';

  for (let i = lineToStr.length - 1; i >= 0; i--) {
    reverseLine += lineToStr[i];
  }

  return lineToStr === reverseLine;
};

/*
====================
ALTERNATIVE SOLUTION
====================

const isPalindrome = (line) => line.toString() === line.toString().split('').reverse().join('');

--------------------

const isPalindrome = (line) => {
  if (typeof line === 'number') {
    const reverseLine = Number(line.toString().split('').reverse().join(''));

    return line === reverseLine;
  }
  const reverseLine = line.split('').reverse().join('');

  return line === reverseLine;
};
*/

/*
====
TEST
====
*/
console.log(isPalindrome('anna')); // true
console.log(isPalindrome('walter')); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123456)); // false
console.log(isPalindrome('.')); // true
console.log(isPalindrome('.!!.')); // true
