/*
============
INSTRUCTIONS
============
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

const arrayMadness = (a, b) =>
  a.reduce((acc, curr) => acc + curr ** 2, 0) >
  b.reduce((acc, curr) => acc + curr ** 3, 0);


/*
====================
ALTERNATIVE SOLUTION
====================

const arrayMadness = (a, b) => {
  let sumA = 0;
  let sumB = 0;

  const sumArr = (arr, operation) => {
    let sum = 0;

    for (let num of arr) {
      if (operation === 'squares') {
        sum += num ** 2;
      } else if (operation === 'cubes') {
        sum += num ** 3;
      }
    }
    return sum;
  };

  sumA = sumArr(a, 'squares');
  sumB = sumArr(b, 'cubes');

  return sumA > sumB;
};

*/
