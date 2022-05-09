/*
============
INSTRUCTIONS
============
Get the sum of two arrays...actually the sum of all their elements.

P.S. Each array includes only integer numbers. Output is a number too.
*/

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);


/*
====================
ALTERNATIVE SOLUTION
====================

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, curr) => acc + curr, 0);

--------------------

const arrayPlusArray = (arr1, arr2) => arr1.reduce((acc, curr) => acc + curr, 0) + arr2.reduce((acc, curr) => acc + curr, 0);

*/