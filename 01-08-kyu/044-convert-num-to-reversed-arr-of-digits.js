/*
============
INSTRUCTIONS
============
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

const digitize = n => n.toString().split('').map(el => +el).reverse();


/*
====================
ALTERNATIVE SOLUTION
====================

const digitize = n => String(n).split('').reverse().map(Number);

--------------------

const digitize = n => {
  const numsToString = String(n);
  const stringToArr = numsToString.split('');

  let output = [];

  for(let i = stringToArr.length - 1; i >= 0; i--) {
    output.push(Number(stringToArr[i]));
  }

  return output;
}

*/

