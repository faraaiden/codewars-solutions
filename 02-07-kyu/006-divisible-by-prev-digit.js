/*
============
INSTRUCTIONS
============
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]

*** Remember 0 is evenly divisible by all integers but not the other way around ***
*/

const divisibleByLast = (n) => {
  const nStr = String(n);
  let output = [];

  for (let i = 0; i < nStr.length; i++) {
    if (i === 0 || nStr[i] % nStr[i - 1] !== 0) {
      output.push(false);
    } else {
      output.push(true);
    }
  }

  return output;
};


/*
====================
ALTERNATIVE SOLUTION
====================

const divisibleByLast = n => n.toString().split('').map((num, idx, arr) => num % arr[idx - 1] === 0);

*/