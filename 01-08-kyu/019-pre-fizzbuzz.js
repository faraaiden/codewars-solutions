/*
============
INSTRUCTIONS
============
This is the first step to understand FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.
*/

const preFizz = n => [...Array(n).keys()].map(int => int + 1);

/*
===============
OTHER SOLUTIONS
===============

const preFizz = (n) => {
  const output = [];

  for (let i = 1; i <= n; i++) {
    output.push(i);
  }

  return output;
};

*/

/*
====
TEST
====
*/

console.log(preFizz(1)); // [1]
console.log(preFizz(2)); // [1,2]
console.log(preFizz(3)); // [1,2,3]
console.log(preFizz(4)); // [1,2,3,4]
console.log(preFizz(5)); // [1,2,3,4,5]
