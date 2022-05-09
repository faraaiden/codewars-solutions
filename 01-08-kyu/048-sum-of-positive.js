/*
============
INSTRUCTIONS
============
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

const positiveSum = arr => arr.reduce((total, value) => total + (value > 0 ? value : 0), 0);

/*
====================
ALTERNATIVE SOLUTION
====================

const positiveSum = (arr) => {
  let sum = 0;

  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
};

--------------------

const positiveSum = arr => arr.filter(num => num > 0).reduce((total, value) => total + value, 0)

*/
